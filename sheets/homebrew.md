---
title: Homebrew
createdDate: 2019-08-16
updatedDate: 2019-12-02
published: true
---

## Search homebrew

Search homebrew for apps, cli's, tools

```bash
brew search keychain
```

## Install

```bash
brew install keychain
```

If the item you're looking for is part of a cask:

```bash
brew cask install visual-studio-code-insiders
```

## Install multiple items in one command

```bash
brew cask install firefox firefox-developer-edition
```

## Check for and install updates

Check for updates on installed apps and upgrade anything that is
outdated.

```bash
brew update --verbose && brew upgrade `brew outdated`
```

## Cask upgrade

Brew and casks are treated differently so the upgrade is a different
syntax too.

```bash
# check outdated
brew cask outdated
# update outdated
brew cask upgrade
```

Alternatively [there's a package] you can install.

Install:

```bash
brew tap buo/cask-upgrade
```

Usage:

```bash
brew cu
```

<!-- Links -->

[there's a package]: https://github.com/buo/homebrew-cask-upgrade
