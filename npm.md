# NPM plz!

A list of terminal commands and flags to help me use `npm` 

## enable npm cache

Super charge `npm`

```
npm config set cache-min 9999999
```

## install package.json dependencies 

```
npm install
```

**Shorthand**

```
npm i
```

## add standard by feross

```
npm install standard -g
```

## update npm

```
npm install -g npm@latest
```

## flags

`-S` is the same as `--save`
`-D` is the same as `--save-dev`

## installed version

`npm list` for local packages or `npm list -g` or `npm list -g --depth=0` for globally installed packages.

## Node Version Manager `nvm`

Say you want to install Node v6.9.1 you would write on the terminal:

```
nvm install 6
```

If you have multiple versions of Node.js installed on your workspace, you can switch to a specific version by writing:

```
nvm use 0.10.40
```

Making a node version default

In order to set a default version of node for your workspace, just type:

```
nvm alias default 6
```

Where 6 was the version you wanted to be used as default.

## Uninstall global package

```
npm -g uninstall <name> --save
```

## Upgrade NPM on Windows

```shell
npm-windows-upgrade
```

