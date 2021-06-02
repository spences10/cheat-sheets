---
title: ZSH
createdDate: 2017-10-11
updatedDate: 2021-01-10
published: true
---

## Human Readable `$PATH` output

Use this to nicely format the `$PATH` variable:

```bash
echo -e ${PATH//:/\\n}
```

## Node not working in zsh?

If you installed nvm on bash then moved over to zsh try adding this
config in your `.zshrc` file:

```bash
# npm was not working
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## Clone plugin into correct location

Some of the ZSH plugins provide this snippet other don't, if you want
to clone a plugin to the preferred location use the following syntax:

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

This is for `zsh-syntax-highlighting` but it's the same for other
plugins.

## Use nvm with zsh

If you are using Oh My ZSH! then you can install the `zsh-nvm` plugin.

Clone the plugin into your zsh plugins folder:

```bash
git clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm
```

Then load as a plugin in your `.zshrc`

```bash
plugins+=(zsh-nvm)
```

Take a look a the [Permission denied when trying to install the
plugin] issue on GitHub for permission errors.

## include aliases

## oh my zsh

<!-- Links -->

[`zsh-nvm`]: https://github.com/lukechilds/zsh-nvm
[permission denied when trying to install the plugin]:
  https://github.com/lukechilds/zsh-nvm/issues/14
