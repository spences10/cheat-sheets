---
title: Yarn
createdDate: 2017-05-19
updatedDate: 2021-01-04
published: true
---

## Yarn global binaries not showing

When you globally add a package with yarn and it doesn't show in the
terminal.

Usually adding the path to your `.bashrc` or `.zshrc` works, try
adding this:

```bash
# nano ~/.bashrc
# or
# nano ~/.zshrc
export PATH="$PATH:$(yarn global bin)"
```

If that doesn't work you may need to set the yarn prefix.

**Steps**

Confirm your global bin path:

```bash
yarn global bin
```

I got: `/home/username/.yarn/bin`

**set yarn prefix:**

make sure your yarn prefix is the parent directory of your bin
directory. You can confirm by running

```bash
yarn config get prefix
```

When I ran this it was undefined, so I set it:

```bash
yarn config set prefix ~/.yarn
```

Add the following to `~/.zshrc` or `~/.bashrc`

```bash
export PATH="$PATH:`yarn global bin`"
```

[Source](https://stackoverflow.com/a/53879534/1138354)

## Update dependencies

Update all project dependencies to lates versions.

```bash
yarn upgrade --latest
```

## Globally add a package

```bash
yarn global add netlify-cli
```

## Upgrade global packages

```bash
yarn global upgrade
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
