// This JavaScript is by GitHub Copilot.

// Set the textContent of dgBuild to import base.css
const dgBuild = document.getElementById('build');
if (dgBuild) {
  dgBuild.textContent = '@import url("base.css");';
}

// Create the watermark element
const dgWatermark = document.createElement('span');
dgWatermark.className = 'builder';
dgWatermark.textContent = 'dg';
document.body.appendChild(dgWatermark);
