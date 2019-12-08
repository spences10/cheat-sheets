---
title: CSS
createdDate: 2019-12-07
updatedDate: 2019-12-07
published: true
cover: favicon.png
---

## Vertically center with margin

```css
.margins {
  /*   display: flex; */
  display: grid;
}

.margins p {
  margin: auto;
}
```

## Vertically center by positioning

```css
.absolute {
  position: relative;
}

.absolute p {
  position: absolute;
  /*   height: 100%; */
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
```

## Vertically center by flexbox

```css
.flexbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Vertically center by grid

```css
.grid {
  display: grid;
  /*   align-items: center;
  justify-content: center; */
  place-items: center;
}
```
