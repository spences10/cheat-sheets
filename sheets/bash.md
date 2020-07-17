---
title: Bash
createdDate: 2017-10-11
updatedDate: 2020-07-17
published: true
---

## Change default shell

Use `chsh` utility to change your default shell:

```bash
# list out the shells available with -l
chsh -l
# /bin/bash
# /bin/zsh
# /bin/fish
# set the default shell (with -s) to fish
chsh -s /bin/fish
# set the default shell (with -s) to zsh
chsh -s /bin/zsh
```

## Kill process on port

List any process running on port 8000

```bash
lsof -i:8000
```

Output will look similar to this.

```text
COMMAND   PID  USER
chrome  16085  iamuser
```

Then kill it with `kill`.

```bash
kill -9 16085
```

## Add an alias

```bash
# open your bash_profile with nano
nano ~/.bash_profile
# add your alias
alias f='fish'
# ctrl+x then y to save
```

## Sort alphabetically

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

## Search Bash history

Want to search for an entry in your Bash history?

Use `Ctrl+r` then enter your search term.

## Remove command from bash history

Accidentally added your password as a bash command?

To remove that from the bash history:

```bash
# list out history with
history
```

Then take the number from the output:

```bash
471  ssh-agent
472  exit
473  kill 53111
474  super secret password
475  history
```

Then delete the line you want removed:

```bash
history -d 474
```

Check your `history` again and gone until you do it again.

## Move the contents of a folder to another folder

This will move everything in the Downloads folder to the Videos folder
including any folders inside Downloads.

```bash
mv ~/Downloads/* ~/Videos
```
