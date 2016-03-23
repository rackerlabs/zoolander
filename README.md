# Zoolander

Derek Zoolander's Corporate Style Guide to Help Product Teams Build Ridiculously Good Looking Websites

## Contributing

These instructions are not exhaustive but here is the gist. (Assumptions: you are running tests and verifying your
changes in multiple browsers.)

* Fork Zoolander
* Clone your repo
* Create a branch in your repo
* Make your changes
* Commit your changes
* Push branch to your repo
* Create PR from your repo:`branch` to Zoolander:`master`

## Requirements

Node & NPM

## Getting Started (Step by Step)

```
npm install
npm start
```

## Testing
Test a theme's JS run:

```
npm test
```


## Watch
`npm start` will dynamically compile css and templates but in the event you would like to have a theme's JS to build automatically you can use the following command:

```
npm run watch
```

## Building a Distribution
```
npm run build
```

## Versioning

Use the following command to bump current version
```
npm run bump major | minor | patch
```
For more information on versioning, see http://semver.org/

## Deploy
Run the following command to deploy to github pages!

```
npm run gh-pages
```
