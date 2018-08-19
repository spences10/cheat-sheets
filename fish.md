# Fish shell

## Aliases

Quick list for aliasing:

```sh
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

```sh
ls -la ~/.config/fish/functions/
```

To see what is contained in the functions, use:

```sh
type functionName
# or use functions
functions functionName
```

To create an alias:

```sh
# Sort alphabetically 👌
alias lss 'ls -lart | sort -k9,9'
```

To save said alias:

```sh
funcsave lss
```

View the contents of the function:

```sh
functions lss
# output
# Defined in /home/scott/.config/fish/functions/lss.fish @ line 2
function lss --description 'alias lss ls -lart | sort -k9,9'
        ls -lart | sort -k9,9 $argv;
end
```

To remove an alias:

```sh
rm ~/.config/fish/functions/aliasname.fish
```

or use:

```sh
functions -e aliasname
```

## Oh My Fish

https://github.com/oh-my-fish/oh-my-fish

## List out added aliases

I found this handy function on Stack Overflow which will list out your
functions:

```sh
function aliases --description "list all fish aliases";for f in (functions);functions $f | grep \'alias;end;end;
```

Then you save it `funcsave aliases` and use it:

```sh
aliases
function c --description 'alias c code .'
function g --description 'alias g git'
function lss --description 'alias lss ls -lart | sort -k9,9'
function ni --description 'alias ni npm i'
function nid --description 'alias nid npm i -D'
function nig --description 'alias nig npm i -g'
function no --description 'alias no npm outdated'
function nog --description 'alias nog npm outdated -g --depth=0'
function nr --description 'alias nr npm run'
function nrb --description 'alias nrb npm run build'
function nrd --description 'alias nrd npm run dev'
function nrf --description 'alias nrf npm run format'
function nrs --description 'alias nrs npm run start'
function nug --description 'alias nug npm -g un'
function nun --description 'alias nun npm un'
function r --description 'alias r cd /mnt/d/repos/'
```
