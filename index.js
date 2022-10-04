const { exec } = require('child_process');
const path = require('path');
const binary = path.join(__dirname, './sample_darwin_amd64');
const printButton = document.getElementById('print-button');
printButton.addEventListener('click', () => {
  const ls = exec(binary);
  let printedText = document.getElementById('printed-text');
  ls.stdout.on('data', (data) => (printedText.innerText = data));
  ls.stderr.on('data', (error) => (printedText.innerText = error));
});
