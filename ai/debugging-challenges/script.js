const challenges = [
  {
    title: 'The missing total',
    label: 'LEVEL 01 / WARM-UP',
    difficulty: 'EASY',
    prompt: 'Write a function that adds every number in the list. Empty lists should total zero.',
    functionName: 'sumNumbers',
    starter: `function sumNumbers(numbers) {
      let total = 0;
      for (let index = 0; index < numbers.length - 1; index++) {
        total += numbers[index];
      }
      return total;
    }`,
    tests: [
      { name: 'Adds a list of positive numbers', input: [[2, 4, 6]], expected: 12 },
      { name: 'Includes negative numbers', input: [[10, -3, 5]], expected: 12 },
      { name: 'Handles a one-item list', input: [[7]], expected: 7 },
      { name: 'Handles an empty list', input: [[]], expected: 0 }
    ]
  },
  {
    title: 'The repeat visitor',
    label: 'LEVEL 02 / PATTERN HUNT',
    difficulty: 'MEDIUM',
    prompt: 'Return the first value that appears for a second time while scanning left to right. Return null if every value is unique.',
    functionName: 'firstDuplicate',
    starter: `function firstDuplicate(values) {
      const seen = new Set();
      for (const value of values) {
        if (seen.has(value)) return value;
      }
      return null;
    }`,
    tests: [
      { name: 'Finds a repeat after other values', input: [[4, 2, 9, 2, 4]], expected: 2 },
      { name: 'Returns the earliest repeated value', input: [['a', 'b', 'b', 'a']], expected: 'b' },
      { name: 'Allows zero to be the repeated value', input: [[0, 1, 0]], expected: 0 },
      { name: 'Returns null when there are no repeats', input: [[1, 2, 3]], expected: null }
    ]
  },
  {
    title: 'The overlapping bookings',
    label: 'LEVEL 03 / EDGE CASES',
    difficulty: 'HARD',
    prompt: 'Merge overlapping time ranges. Each range is [start, end], and the result should be sorted with overlaps combined.',
    functionName: 'mergeRanges',
    starter: `function mergeRanges(ranges) {
      const sorted = ranges.map(([start, end]) => [start, end]);
      sorted.sort((first, second) => first[0] - second[0]);
      const merged = [];
      for (const range of sorted) {
        const last = merged[merged.length - 1];
        if (!last || range[0] > last[1]) {
          merged.push(range);
        } else {
          last[1] = range[1];
        }
      }
      return merged;
    }`,
    tests: [
      { name: 'Combines simple overlaps', input: [[[1, 4], [3, 7]]], expected: [[1, 7]] },
      { name: 'Keeps disjoint ranges separate and sorted', input: [[[8, 10], [1, 2], [4, 5]]], expected: [[1, 2], [4, 5], [8, 10]] },
      { name: 'Preserves a long range around a nested range', input: [[[1, 10], [2, 3], [9, 12]]], expected: [[1, 12]] },
      { name: 'Does not alter the input ranges', input: [[[5, 8], [1, 6]]], expected: [[1, 8]], preserveInput: true }
    ]
  }
];

const nav = document.getElementById('challengeNav');
const editor = document.getElementById('codeEditor');
const completed = new Set();
let activeIndex = 0;

function renderNavigation() {
  nav.innerHTML = '';
  challenges.forEach((challenge, index) => {
    const button = document.createElement('button');
    button.className = 'challenge-tab';
    button.type = 'button';
    button.setAttribute('aria-current', index === activeIndex ? 'step' : 'false');
    button.innerHTML = `<span class="tab-number">0${index + 1}</span><span class="tab-name">${challenge.title}</span><span class="tab-status" aria-label="solved">${completed.has(index) ? '✓' : ''}</span>`;
    button.addEventListener('click', () => selectChallenge(index));
    nav.appendChild(button);
  });
  document.getElementById('progress').textContent = `${completed.size} / ${challenges.length} solved`;
}

function selectChallenge(index) {
  activeIndex = index;
  const challenge = challenges[index];
  document.getElementById('levelLabel').textContent = challenge.label;
  document.getElementById('challengeTitle').textContent = challenge.title;
  document.getElementById('difficulty').textContent = challenge.difficulty;
  document.getElementById('challengePrompt').textContent = challenge.prompt;
  document.getElementById('resultCount').textContent = `${challenge.tests.length} checks`;
  editor.value = challenge.starter;
  document.getElementById('resultTitle').textContent = 'Waiting for your first run';
  document.getElementById('testResults').innerHTML = '<p class="empty-state">Make a change, then run the checks.</p>';
  renderNavigation();
}

function displayValue(value) {
  if (value === undefined) return 'undefined';
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function runChecks() {
  const challenge = challenges[activeIndex];
  const results = document.getElementById('testResults');
  results.innerHTML = '';
  let testedFunction;
  let setupError;

  try {
    testedFunction = new Function(`${editor.value}\nreturn ${challenge.functionName};`)();
    if (typeof testedFunction !== 'function') throw new Error(`Define a function named ${challenge.functionName}.`);
  } catch (error) {
    setupError = error;
  }

  let passed = 0;
  challenge.tests.forEach(test => {
    let actual;
    let error;
    if (setupError) {
      error = setupError;
    } else {
      try {
        const input = structuredClone(test.input);
        const original = test.preserveInput ? structuredClone(input[0]) : null;
        actual = testedFunction(...input);
        if (test.preserveInput && JSON.stringify(input[0]) !== JSON.stringify(original)) {
          throw new Error('The input was changed.');
        }
      } catch (caught) {
        error = caught;
      }
    }

    const success = !error && JSON.stringify(actual) === JSON.stringify(test.expected);
    if (success) passed++;
    const row = document.createElement('div');
    row.className = `test-row ${success ? 'pass' : 'fail'}`;
    const detail = error ? error.message : `Expected ${displayValue(test.expected)}; got ${displayValue(actual)}`;
    row.innerHTML = `<span class="test-icon">${success ? '✓' : '×'}</span><span>${test.name}<span class="test-detail">${success ? 'Passed' : detail}</span></span>`;
    results.appendChild(row);
  });

  document.getElementById('resultTitle').textContent = passed === challenge.tests.length ? 'All checks passed' : `${passed} of ${challenge.tests.length} checks passed`;
  if (passed === challenge.tests.length) {
    completed.add(activeIndex);
    renderNavigation();
  }
}

document.getElementById('runButton').addEventListener('click', runChecks);
document.getElementById('resetButton').addEventListener('click', () => selectChallenge(activeIndex));
document.addEventListener('keydown', event => {
  if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    runChecks();
  }
});

selectChallenge(0);
