---
title: CSS
createdDate: 2019-12-07
updatedDate: 2019-12-07
published: true
cover: favicon.png
---

## Vertically center with margin

You can use `margin: auto` on both `display: flex` and
`display: grid`.

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
