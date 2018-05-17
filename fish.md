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
```

To create an alias:

```sh
alias rm 'rmtrash'
```

To save said alias:

```sh
funcsave rm
```

To remove an alias:

```sh
rm ~/.config/fish/functions/aliasname.fish
```

or use:

```sh
unalias aliasname
/usr/bin/unalias: line 2: unalias: aliasname: not found
functions -e aliasname
type aliasname
type: Could not find "aliasname"
```

## Oh My Fish

https://github.com/oh-my-fish/oh-my-fish
