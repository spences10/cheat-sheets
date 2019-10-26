---
title: Node Version Manager (nvm)
createdDate: 2019-10-26
updatedDate: 2019-10-26
published: true
cover: cover-nvm.png
---

Say you want to install Node v6.9.1 you would write on the terminal:

```bash
nvm install 6
```

If you have multiple versions of Node.js installed on your workspace,
you can switch to a specific version by writing:

```bash
nvm use 0.10.40
```

Making a node version default

In order to set a default version of node for your workspace, just
type:

```bash
nvm alias default 6
```

Where 6 was the version you wanted to be used as default.
