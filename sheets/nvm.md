---
title: NVM (Node Version Manager)
createdDate: 2019-10-26
updatedDate: 2021-03-03
published: true
---

## Set the node version for use in a project

If a project uses a specific version of node a `.nvmrc` file can be
generated with the following command.

```bash
# echo $(node -v) >> .nvmrc
node -v >> .nvmrc
```

When using the project for the first time (in a while maybe) then use
the `nvm use` command to make sure you're using the correct node
version:

```bash
nvm use
# Found '/home/project-name/.nvmrc' with version <v14.16.0>
# Now using node v14.16.0 (npm v6.14.11)
```

## Install specific node version

Say you want to install Node v6.9.1 you would write on the terminal:

```bash
nvm install 6
```

## Switch node versions

If you have multiple versions of Node.js installed on your workspace,
you can switch to a specific version by writing:

```bash
nvm use 0.10.40
```

## Default node version

Making a node version default

In order to set a default version of node for your workspace, type:

```bash
nvm alias default 6
```

Where 6 was the version you wanted to be used as default.
