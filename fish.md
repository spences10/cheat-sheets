# Fish shell

## Aliases

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
alias rm=rmtrash
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
/usr/bin/unalias: line 2: unalias: foo: not found
functions -e aliasname
type aliasname
type: Could not find "aliasname"
```

## Oh My Fish

https://github.com/oh-my-fish/oh-my-fish
