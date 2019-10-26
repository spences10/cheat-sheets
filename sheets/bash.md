---
title: Bash
createdDate: 2017-10-11
updatedDate: 2019-03-10
published: true
cover: cover-bash.png
---

## Add an alias

```bash
# open your bash_profile with nano
nano ~/.bash_profile
# add your alias
alias f='fish'
# ctrl+x then y to save
```

## Sort alphabetically 👌

You may find that commands like `ll` are under your `~/.bashrc` file,
if not then add the following as an alias:

```bash
ls -lart | sort -k9,9
```

## See file permissions

If you need to set the permission on a file (with `chmod`) but don't
know what the permissions of similar files are like you can use
`stat`, the following command displays the permissions of the contents
of the `.ssh/` folder:

```bash
stat -c "%a %n" ~/.ssh/*
```

## Open the SSH agent each time you open a new terminal.

Tired of having to enter your SSH password each time you want to do a
git operation?

Add the following to your `~/.bashrc` file.

```bash
# nano ~/.bashrc
[ -z "$SSH_AUTH_SOCK" ] && eval "\$(ssh-agent -s)"
```
