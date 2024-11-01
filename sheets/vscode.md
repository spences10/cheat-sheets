---
title: VS Code
createdDate: 2019-05-27
updatedDate: 2021-01-21
published: true
slug: vscode
description:
  VS Code is a code editor for the Microsoft Windows operating system.
---

## Show Key presses

If you're screencasting you can display the keys being pressed in
VSCode with the Screencast Mode.

In the command palette (Ctrl+shift+p) search for "Toggle Screencast
Mode", you can add a keyboard shortcut to it as well in the keyboard
shortcuts, search for "Open Keyboard Shortcuts (JSON)" in the command
pallet.

```json
{
	"key": "ctrl+alt+s ctrl+alt+c",
	"command": "workbench.action.toggleScreencastMode"
}
```

Here's the settings that can be changed in the VSCode settings (open
with Ctrl+,).

```json
{
	"screencastMode.fontSize": 56,
	"screencastMode.keyboardOverlayTimeout": 800,
	"screencastMode.mouseIndicatorColor": "#FF0000",
	"screencastMode.mouseIndicatorSize": 20,
	"screencastMode.onlyKeyboardShortcuts": false,
	"screencastMode.verticalOffset": 20
}
```

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

Alternatively use the keyboard shortcuts `Crtl+Shift+p` and search for
"Open Keyboard Shortcuts (JSON)"

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

Shout out to [Caleb Porzio] for the suggestion of adding in shortcuts for
the sidebar defaults, "explorer", "git" (scm), "debug" and "extensions".
The default shortcuts are a bit inconsistent.

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

Another tip from [Caleb Porzio] is removing all the clutter in the editor
and moving the sidebar.

Add these "optional" setting to the `settings.json` file, you can
access it with `Crtl+Shift+p`.

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
