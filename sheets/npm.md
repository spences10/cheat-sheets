---
title: npm
createdDate: 2017-05-19
updatedDate: 2019-03-01
published: true
---

A list of terminal commands and flags to help me use `npm`

## install package.json dependencies

```bash
npm install
```

**Shorthand**

```bash
# install
npm i <package>
# uninstall
npm un <package>
# update
npm up <package>
```

## List globally installed packages.

```bash
npm list -g --depth=0
```

## list available scripts to run

```bash
npm run
```

## update npm

```bash
npm install -g npm@latest
# using windows? Then use
npm-windows-upgrade
```

## flags

`-S` is the same as `--save` not needed in npm 5+ `-D` is the same as
`--save-dev`

## installed version

```bash
npm list # for local packages
```

## Uninstall global package

```bash
npm -g uninstall <name> --save
```

## Upgrade NPM on Windows

After trying several times to upgrade npm on Windows I found this
whilst poking around.

```bash
npm-windows-upgrade
```

## Updating global packages

To update global packages individually you can use:

```bash
npm update -g <package>
```

To see which packages need updating use:

```bash
npm outdated -g --depth=0
```

## dont `rm -rf node_modules; npm install`

Instead use:

```bash
npm ci
```

It will have the same effect but be 2-3x faster 👌

## Bump version number

```bash
npm version patch
# also | major | minor | patch
```
