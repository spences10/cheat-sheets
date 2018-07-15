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
