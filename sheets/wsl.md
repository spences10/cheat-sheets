---
title: Windows Subsystem Linux (WSL)
createdDate: 2017-10-11
updatedDate: 2018-01-27
published: true
---

There's a few config options as part of the WSL I always forget

Links for getting Linux programs running in mixed mode:

https://github.com/Microsoft/BashOnWindows/issues/2537

https://virtualizationreview.com/articles/2017/02/08/graphical-programs-on-windows-subsystem-on-linux.aspx

https://www.addictivetips.com/windows-tips/how-to-run-linux-apps-from-bash-on-windows-10-guide/

## WSL Programs that work

https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwi0rcuFr-rWAhXRDRoKHXlrA58QFgg4MAI&url=https%3A%2F%2Fgithub.com%2Fethanhs%2FWSL-Programs&usg=AOvVaw2miCspYckMufw34925HcoS

## Linuxbrew

Linuxbrew is like Chocolatey for Windows or Homebrew for OSx

```bash
brew install package
```

## What version of Ubuntu is installed

```bash
lsb_release -a
```

## lxrun.exe

Use `lxrun.exe` to interact with the WSL from the CMD prompt

Burn it all 🔥:

```bash
lxrun /uninstall /full
```
