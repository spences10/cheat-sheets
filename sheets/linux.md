---
title: Linux
createdDate: 2018-03-22
updatedDate: 2019-02-11
published: true
slug: linux
description: Linux is a free and open source operating system.
---

## Tar and untar

To compress a file/folder into a `.tar.gz` archive:

```bash
tar cvfz archive.tar.gz folder
```

To decompress a folder/folder:

```bash
tar xvfz archive.tar.gz
```

## Install a binary

If you're working on a local machine with administrator permissions,
you may want to add downloaded-binary to your PATH, so that you can
access it directly from any project folder. You could do this by
extracting it to a directory that is already on your PATH. (For
example, `/usr/local/bin` is a common choice for Mac and Linux.).

```bash
# navigate to download location of .tar.gz
sudo mv downloaded-binary.tar.gz /usr/local/bin/downloaded-binary.tar.gz
sudo tar zxf downloaded-binary.tar.gz
```

See further details on [how to install a binary].

## Get build info

```bash
uname -a
# Linux DESKTOP-KCGTGRV 4.4.0-43-Microsoft
# 1-Microsoft Wed Dec 31 14:42:53 PST 2014 x86_64 x86_64 x86_64 GNU/Linux
```

## Get kernel version

```bash
uname -r
```

## Get architecture

```bash
dpkg --print-architecture
# amd64
```

## See what Linux version

```bash
cat /etc/issue
# Debian GNU/Linux 9 \n \l
```

## force uninstall a package

Nuclear option:
https://askubuntu.com/questions/525088/how-to-delete-broken-packages-in-ubuntu

## see what services are available

```bash
ll /etc/systemd/system
```

## see what services are running

```bash
journalctl -ef
```

<!-- Links -->

[how to install a binary]:
  https://www.cyberciti.biz/faq/install-tarballs/
