---
title: VS Code
createdDate: 2019-05-27
updatedDate: 2019-08-18
published: true
---

## Want to list out what extensions you have installed?

Say that you are moving from VS Code to VS Code Insiders and you want
to install the same extensions:

```bash
code --list-extensions | xargs -L 1 echo code-insiders --install-extension
```

Moving from VS Code Insiders to VS Code? Then swap round the commands:

```bash
code-insiders --list-extensions | xargs -L 1 echo code --install-extension
```

## Want to have your own keyboard shortcut?

In some cases moving from one platform to another (Windows to Linux
say) they keyboard shortcuts are different or just plain not there.

You can create your own keyboard shortcuts but it's buried in the GUI
settings for some reason.

In VSCode goto `File -> Preferences -> Keyboard shortcuts.`, then over
on the top right you can select the icon for Open Keyboard Shortcuts
(JSON).

Paste in your shortcut, in this case duplicating lines, which is
missing in Ubuntu VS Code:

```json
// Place your key bindings in this file to override the defaults
[
  {
    "key": "shift+alt+down",
    "command": "editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+up",
    "command": "editor.action.copyLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  }
]
```

Shout out to [Caleb Porzio] for the suggestion of adding in shortcuts
for the sidebar defaults, "explorer", "git" (scm), "debug" and
"extensions". The default shortcuts are a bit inconsistent.

```json
[
  {
    "key": "ctrl+k ctrl+e",
    "command": "workbench.view.explorer"
  },
  {
    "key": "ctrl+k ctrl+g",
    "command": "workbench.view.scm"
  },
  {
    "key": "ctrl+k ctrl+d",
    "command": "workbench.view.debug"
  },
  {
    "key": "ctrl+k ctrl+x",
    "command": "workbench.extensions.action.showInstalledExtensions"
  }
]
```

## Remove the clutter

Another tip from [Caleb Porzio] is removing all the clutter in the
editor and moving the sidebar.

```json
{
  "workbench.activityBar.visible": false,
  "workbench.editor.showTabs": false,
  "workbench.sideBar.location": "right",
  "workbench.statusBar.visible": false,
  "editor.minimap.enabled": false
}
```

<!-- Links -->

[caleb porzio]: https://twitter.com/calebporzio
