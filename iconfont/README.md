# rsweb_fonts
Rackspace consolidated font library

## How this works

#### make sure to install `npm` in the root `zoolander` directory
```bash
npm install .
```
#### To update/add fonts
1. Open [Fontello.com](http://fontello.com) by running 
```bash
npm run font:open
```
2. Select fonts to add from exising libraries or upload new custom svgs
3. Download the `config.json` file only and save/replace it in this directory
4. Then run 
```bash
npm run font:update
```

#### To build new css font file
```bash
npm run font:build
```
