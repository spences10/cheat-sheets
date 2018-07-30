# Useful Linux commands

## Install a binary

If you're working on a local machine with administrator permissions,
you may want to add downloaded-binary to your PATH, so that you can
access it directly from any project folder. You could do this by
extracting it to a directory that is already on your PATH. (For
example, `/usr/local/bin` is a common choice for Mac and Linux.).

```sh
# navigate to download location of .tar.gz
sudo mv downloaded-binary.tar.gz /usr/local/bin/downloaded-binary.tar.gz
sudo tar zxf downloaded-binary.tar.gz
```

See further details on [how to install a binary].

## Get build info

```sh
uname -a
# Linux DESKTOP-KCGTGRV 4.4.0-43-Microsoft #1-Microsoft Wed Dec 31 14:42:53 PST 2014 x86_64 x86_64 x86_64 GNU/Linux
```

## Get kernel version

```sh
uname -r
```

## Get architecture

```sh
dpkg --print-architecture
# amd64
```

## See what Linux version

```sh
cat /etc/issue
# Debian GNU/Linux 9 \n \l
```

## force uninstall a package

Nuclear option:
https://askubuntu.com/questions/525088/how-to-delete-broken-packages-in-ubuntu

<!-- Links -->

[how to install a binary]:
  https://www.cyberciti.biz/faq/install-tarballs/
