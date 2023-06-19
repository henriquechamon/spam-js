const keypress = require('keypress');
const { spawn } = require('child_process');


const browser = spawn(' ', ['http://www.google.com']);

// Espera a página carregar
browser.stdout.on('data', (data) => {
  if (data.includes('Document.readyState')) {
    setTimeout(() => {
      const inputField = document.querySelector('#input-field');
      inputField.focus();
      keypress('Hello, World!');
      inputField.blur();
    }, 5000);
  }
});
