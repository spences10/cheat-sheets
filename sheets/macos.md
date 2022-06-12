---
title: macOS
createdDate: 2018-04-05
updatedDate: 2021-01-05
published: true
slug: macos
description: macOS is a macOS operating system developed and published by Apple Inc.
---

<script>
  import Author from '$lib/author.svelte'
</script>

## Install Git without xcode

In the terminal app do:

```bash
git
```

This will install prompt you to install them, agree to the terms and
it will download: git, svn, libtool, perl, make, among others. These
would come with many Linux distros by default.

You can investigate the install:
`/Library/Developer/CommandLineTools/`

<Author author="harrisgeo88" />

## Screen snip

Select an area to save to a file

```bash
cmd + shift + 4
```

Screen snip to clipboard

```bash
cmd + shift + ctrl + 4
```

## Screenshot

Window screenshot

```bash
cmd + shift + 4 #then spacebar
```

Window screenshot to clipboard

```bash
cmd + shift + cmd + 4 #then spacebar
```

## Screenshot, record screen UI

There's another option for taking screenshots in Mojave.

```bash
cmd + shift + 5
```

This is where you can configure the type of snip you want to take.

Hold dow the option key when taking a screenshot to remove the shadow.

## Keys

The '#' character

```bash
alt + 3
```

## System

Show hidden files

```bash
shift + cmd + .
```

## Enable "Allow apps downloaded from:"

You may notice that the option to "Allow apps downloaded from:
Anywhere" is disabled, to enable it use:

```bash
sudo spctl --master-disable
```
