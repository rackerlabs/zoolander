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

## Visual Testing
To capture a baseline of snapshots run:
```
npm run test:visual:init
```

To run tests of the latest changes run against the baseline, run:
```
npm run test:visual
```

## Versioning

Use the following command to bump current version

```
npm version major | minor | patch
```

For more information on versioning, see http://semver.org/

## Deploy

Run the following command to deploy to github pages!

```
npm run gh-pages
```
