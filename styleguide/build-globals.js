const fs = require('fs');
const icons = require('../fonts/config.json');

// harp-globals
const globals = {
  base: '/',
  css: 'css/global.css',
};

const buildIconGlobals = async () => {
  const list = icons.glyphs;
  globals.icons = list.reverse(); // sort by newest first
  await new Promise((resolve, reject) => {
    fs.writeFile('./styleguide/_harp.json', JSON.stringify({ globals }, null, 4), (err) => {
      if (err) {
        reject(err.message || err);
      }
      console.log('build harp globals!'); // eslint-disable-line
      resolve(globals);
    });
  });
};

buildIconGlobals();
