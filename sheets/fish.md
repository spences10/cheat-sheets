---
title: Fish Shell
createdDate: 2017-10-11
updatedDate: 2020-08-26
published: true
slug: fish
---

## NVM not recognised in Fish?

Install the [Oh My Fish](#Oh-My-Fish) package `nvm` with:

```bash
omf install nvm
```

## Aliases

Quick list for aliasing:

```bash
functions aliasname
# Displays function contents

functions -n
# Displays a list of currently-defined functions

functions -c newalias aliasname
# Copies the 'aliasname' function to a new function called 'newalias'

functions -e aliasname
# Erases the function `aliasname`
```

To list what aliases you have already defined:

```bash
ls -la ~/.config/fish/functions/
```

To see what is contained in the functions, use:

```bash
type functionName
# or use functions
functions functionName
```

To create an alias:

```bash
# Sort alphabetically
alias lss 'ls -lart | sort -k9,9'
```

To save said alias:

```bash
funcsave lss
```

View the contents of the function:

```bash
functions lss
# output
# Defined in /home/scott/.config/fish/functions/lss.fish @ line 2
function lss --description 'alias lss ls -lart | sort -k9,9'
        ls -lart | sort -k9,9 $argv;
end
```

To remove an alias:

```bash
rm ~/.config/fish/functions/aliasname.fish
```

or use:

```bash
functions -e aliasname
```

## Oh My Fish

https://github.com/oh-my-fish/oh-my-fish

## Use nvm with fish

If you have Oh My Fish installed then install the `bass` plugin:

```bash
omf install bass
```

Then add the following to your `config.fish` file:

```bash
function nvm
   bass source (brew --prefix nvm)/nvm.sh --no-use ';' nvm $argv
end

set -x NVM_DIR ~/.nvm
nvm use default --silent
```

Then `source` the `config.fish` file:

```bash
source ~/.config/fish/config.fish
```

## List out added aliases

I found this [handy function] on Stack Overflow which will list out
your functions:

```bash
function aliases --description "list all fish aliases";for f in (functions);functions $f | grep \'alias;end;end;
```

Then you save it `funcsave aliases` and use it `funcsave` the output
will be:

```bash
aliases
function c --description 'alias c code .'
function g --description 'alias g git'
...
```

The following you can copy paste into fish:

```bash
alias c 'code .';funcsave c;alias e exit;funcsave e;alias g hub;funcsave g;alias lss 'ls -lart | sort -k9,9';funcsave lss;alias ni 'npm i';funcsave ni;alias nid 'npm i -D';funcsave nid;alias nig 'npm i -g';funcsave nig;alias no 'npm outdated';funcsave no;alias nog 'npm outdated -g --depth=0';funcsave nog;alias nr 'npm run';funcsave nr;alias nrb 'npm run build';funcsave nrb;alias nrd 'npm run dev';funcsave nrd;alias nrf 'npm run format';funcsave nrf;alias nrs 'npm run start';funcsave nrs;alias nu 'npm un';funcsave nu;alias nug 'npm -g un';funcsave nug;alias pp 'git pull && git push';funcsave pp;alias r 'cd ~/repos';funcsave r;alias ya 'yarn add';funcsave ya;alias yad 'yarn add -D';funcsave yad;alias yb 'yarn build';funcsave yb;alias ybycys 'yarn clean && yb && yarn serve';funcsave ybycys;alias yd 'yarn dev';funcsave yd;alias yg 'yarn go';funcsave yg;alias yga 'yarn global add';funcsave yga;alias yr 'yarn remove';funcsave yr;alias ys 'yarn start';funcsave ys;alias yyb 'yarn && yarn build';funcsave yyb;alias yyd 'yarn && yarn dev';funcsave yyd;
```

<!-- Links -->

[handy function]: https://stackoverflow.com/a/50803805/1138354
