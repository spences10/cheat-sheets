# Bash

## Add an alias

```sh
# open your bash_profile with nano
nano ~/.bash_profile
# add your alias
alias f='fish'
# ctrl+x then y to save
```

## Sort alphabetically 👌

You may find that commands like `ll` are under your `~/.bashrc` file,
if not then add the following as an alias:

```sh
ls -lart | sort -k9,9
```
