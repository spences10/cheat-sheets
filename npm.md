# NPM plz!

A list of terminal commands and flags to help me use `npm` 

## enable npm cache

Super charge `npm`

```shell
npm config set cache-min 9999999
```

## install package.json dependencies 

```shell
npm install
```

**Shorthand**

```shell
npm i
```

## add standard by feross

```shell
npm install standard -g
```

## update npm

```shell
npm install -g npm@latest
```

## flags

`-S` is the same as `--save`
`-D` is the same as `--save-dev`

## installed version

```shell
npm list # for local packages 
npm list -g # all the packages
```

Globally installed packages.

```shell
npm list -g --depth=0
```

## Node Version Manager `nvm`

Say you want to install Node v6.9.1 you would write on the terminal:

```shell
nvm install 6
```

If you have multiple versions of Node.js installed on your workspace, you can switch to a specific version by writing:

```shell
nvm use 0.10.40
```

Making a node version default

In order to set a default version of node for your workspace, just type:

```shell
nvm alias default 6
```

Where 6 was the version you wanted to be used as default.

## Uninstall global package

```shell
npm -g uninstall <name> --save
```

## Upgrade NPM on Windows

After trying several times to upgrade npm on Windows I found this whilst poking around.

```shell
npm-windows-upgrade
```

## Updating global packages

To update global packages individually you can use:

```shell
npm update -g <package>
```

To see which packages need updating use:

```shell
npm outdated -g --depth=0
```

To update all global packages use:

```shell
npm update -g
```

