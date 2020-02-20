# Google Apps Script V8 Template

https://script.google.com

## Stacks

* Google Apps Script V8
  * clasp
* TypeScript
* Yarn v2 (berry)
  * PnP
* ESLint
* Jest
* Remark
* VSCode

## Usage

```bash
git clone https://github.com/hibikine/gas-v8-template
mv gas-v8-template your-project-name
cd your-project-name
vim .clasp.json # add your script id
yarn init
yarn login

code . # open vscode
```

### Login

```bash
yarn login
```

### Push

```bash
yarn push
```

### Deploy

```bash
yarn deploy
```

## License

MIT