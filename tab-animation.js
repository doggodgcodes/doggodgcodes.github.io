const frame = ["doggodgcodes", "d oggodgcodes", "do ggodgcodes", "dog godgcodes", "dogg odgcodes", "doggo dgcodes", "doggod gcodes", "doggodg codes", "doggodgc odes", "doggodgco des", "doggodgcod es", "doggodgcode s"];
let i = 0;
let animationEnabled = true;
let animationTimer;

function tab() {
  if (!animationCheckbox) {
    return;
  }

  if (document.hidden) {
    document.title = frame[i];
    if (i < frame.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
  animationTimer = setTimeout(tab, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  const animationCheckbox = document.getElementById("animationCheckbox");

  if (!animationCheckbox) {
    return;
  }

  animationCheckbox.checked = animationEnabled;
  animationCheckbox.addEventListener("change", () => {
    animationEnabled = animationCheckbox.checked;
    console.log(animationEnabled);

    if (animationEnabled == true) {
      tab();
    } else {
      clearTimeout(animationTimer);
      document.title = frame[0];
    }
  });
});

tab();
