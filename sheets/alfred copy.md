---
title: Windows Subsystem Linux (WSL)
createdDate: 2020-10-10
updatedDate: 2020-10-10
published: true
---

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

## List installed WSL Distros

```bash
# wsl --list --verbose
wsl -l -v
```
