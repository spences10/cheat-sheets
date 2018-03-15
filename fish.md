# Fish shell

## Aliases

To list what aliases you have already defined:

```shell
ls -la ~/.config/fish/functions/
```

To see what is contained in the functions, use:

```shell
type functionName
```

To create an alias:

```shell
alias rm=rmtrash
```

To save said alias:

```shell
funcsave rm
```

To remove an alias:

```shell
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

## Set default shell

to fish:

```sh
chsh -s `which fish`
```

to bash:

```sh
chsh -s (which bash)
```
