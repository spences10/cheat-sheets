---
title: Winget
createdDate: 2021-10-26
updatedDate: 2021-10-26
published: true
slug: winget
---

## Upgrade all packages

The `--all` option allows you to upgrade all packages:

```bash
winget upgrade --all
```

## List installed packages

Listing installed packages will also detail which ones can be updated.

```bash
winget list
```

## Update specific package

To update a specific package add the package `--id`

```bash
winget upgrade --id VideoLAN.VLC
```
