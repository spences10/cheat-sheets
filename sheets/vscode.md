---
title: VS Code
createdDate: 2019-05-27
updatedDate: 2019-05-27
published: true
---

# VS Code

Want to list out what extensions you have installed?

Say that you are moving from VS Code to VS Code Insiders and you want
to install the same extensions:

```bash
code --list-extensions | xargs -L 1 echo code-insiders --install-extension
```

Moving from VS Code Insiders to VS Code? Then swap round the commands:

```bash
code-insiders --list-extensions | xargs -L 1 echo code --install-extension
```
