---
title: CSS
createdDate: 2019-12-07
updatedDate: 2021-01-04
published: true
slug: css
description:
  CSS is a style sheet language used for describing the presentation
  of a document written in a markup language.
---

## Center anything, horizontally and vertically, with 3 lines of CSS:

```css
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Via
[Marko ⚡ Denic](https://twitter.com/denicmarko/status/1346039973087215617)

## Vertically center with margin

You can use `margin: auto` on both `display: flex` and
`display: grid`.

It will work on the child of `grid` or `flexbox` but not on a block
level element.

```html
<div class="margins">
  <p>Pls center me!</p>
</div>
```

```css
.margins {
  /* display: flex; */
  display: grid;
}

.margins p {
  margin: auto;
}
```

## Vertically center with absolute positioning

```html
<div class="absolute">
  <p>Pls center me!</p>
</div>
```

```css
.absolute {
  position: relative;
}

.absolute p {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
```

## Vertically center with flexbox

```html
<div class="flexbox">
  <p>Pls center me!</p>
</div>
```

```css
.flexbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Vertically center with grid

Use either `align-items: center;` or `place-items: center;`

```html
<div class="grid">
  <p>Pls center me!</p>
</div>
```

```css
.grid {
  display: grid;
  /* align-items: center; */
  place-items: center;
}
```

## Breaking Long Words and URLs

There are times when a really long string of text can overflow the
container of a layout, use this:

```css
.don_break_out_of_parent {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;
}
```
