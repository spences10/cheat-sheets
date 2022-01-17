---
title: Windows Subsystem Linux (WSL)
createdDate: 2017-10-11
updatedDate: 2020-12-13
published: true
slug: wsl
---

## Shutdown one WSL instance

```bash
wsl --terminate Ubuntu # or whatever the distro is called
```

## Shutdown WSL

Localhost not working?

```bash
wsl --shutdown
```

## Change WSL Version

Change between WSL versions

```bash
# wsl --set-version <distro> 2
# example
wsl --set-version Debian 2
```

## Set the default version of WSL

When installing new Linux distros you can default them all to be WSL2
or or one:

```bash
wsl --set-default-version 2
```

## List installed WSL Distros

```bash
# wsl --list --verbose
wsl -l -v
```
