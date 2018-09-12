# NPM plz!

A list of terminal commands and flags to help me use `npm`

## install package.json dependencies

```sh
npm install
```

**Shorthand**

```sh
# install
npm i <package>
# uninstall
npm un <package>
# update
npm up <package>
```

## List globally installed packages.

```sh
npm list -g --depth=0
```

## list available scripts to run

```sh
npm run
```

## update npm

```sh
npm install -g npm@latest
# using windows? Then use
npm-windows-upgrade
```

## flags

`-S` is the same as `--save` not needed in npm 5 `-D` is the same as
`--save-dev`

## installed version

```sh
npm list # for local packages
```

## Node Version Manager `nvm`

Say you want to install Node v6.9.1 you would write on the terminal:

```sh
nvm install 6
```

If you have multiple versions of Node.js installed on your workspace,
you can switch to a specific version by writing:

```sh
nvm use 0.10.40
```

Making a node version default

In order to set a default version of node for your workspace, just
type:

```sh
nvm alias default 6
```

Where 6 was the version you wanted to be used as default.

## Uninstall global package

```sh
npm -g uninstall <name> --save
```

## Upgrade NPM on Windows

After trying several times to upgrade npm on Windows I found this
whilst poking around.

```sh
npm-windows-upgrade
```

## Updating global packages

To update global packages individually you can use:

```sh
npm update -g <package>
```

To see which packages need updating use:

```sh
npm outdated -g --depth=0
```

## npx, one off command

No need to install create react app if you don't want to

```sh
npx create-react-app my-new-app
```

Will use latest create react app to make your new app

## update all project dependencies

Update dependencies with `npm-check`

```bash
npx npm-check -u
```
