---
title: styled components
createdDate: 2019-12-11
updatedDate: 2019-12-11
published: true
slug: styled-components
description:
  Styled components is a library for React that allows you to write
  CSS-in-JS components.
---

## conditionally use a style

```jsx
<StyledButton
	active={true}
	onClick={this.handleButton}
></StyledButton>
```

And in your styles something like this:

```jsx
const StyledButton = styled.button`
	align-items: center;
	line-height: 0.2;

	${({ active }) =>
		active &&
		`
    background: blue;
  `}
`
```
