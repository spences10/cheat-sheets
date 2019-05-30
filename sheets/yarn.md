---
title: Yarn
createdDate: 2017-05-19
updatedDate: 2019-03-12
published: true
---

# Useful Yarn commands

This is just stuff that I have put down that I find I use a lot of the
time for my own reference.

## Update dependencies

```bash
yarn upgrade
```

## displays the location of the yarn bin folder.

```bash
yarn bin
```

## list installed packages.

```bash
yarn ls
```

## create-react-app

Couple of good one here from
[@beedesignllc](https://twitter.com/beedesignllc) 👌

```bash
yarn create react-app my-app-name
```

☝️ downloads and runs latest `create-react-app` works for other
similarly named pkgs

## flow

```bash
yarn flow
```

☝️ will run `node_modules/.bin/flow` without you having to add it as a
package.json script.

## npm ci

The equivalent to `npm ci` for yarn:

```bash
yarn install --frozen-lockfile
```
