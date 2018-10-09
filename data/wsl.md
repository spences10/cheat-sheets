---
templateKey: wsl
title: 'Windows Subsystem Linux (WSL)'
path: '/wsl-things'
createdDate: '2018-07-05'
updatedDate: '2018-07-05'
description: wsl things
---

# Windows Subsystem Linux (WSL)

There's a few config options as part of the WSL I always forget

Links for getting Linux programs running in mixed mode:

https://github.com/Microsoft/BashOnWindows/issues/2537

https://virtualizationreview.com/articles/2017/02/08/graphical-programs-on-windows-subsystem-on-linux.aspx

https://www.addictivetips.com/windows-tips/how-to-run-linux-apps-from-bash-on-windows-10-guide/

## WSL Programs that work

https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwi0rcuFr-rWAhXRDRoKHXlrA58QFgg4MAI&url=https%3A%2F%2Fgithub.com%2Fethanhs%2FWSL-Programs&usg=AOvVaw2miCspYckMufw34925HcoS

## Linuxbrew

Linuxbrew is like Chocolatey for Windows or Homebrew for OSx

```sh
brew install package
```

## What version of Ubuntu is installed

```sh
lsb_release -a
```

## lxrun.exe

Use `lxrun.exe` to interact with the WSL from the CMD prompt

Burn it all 🔥:

```sh
lxrun /uninstall /full
```
