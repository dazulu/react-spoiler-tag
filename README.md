# react-spoiler-tag

> A lightweight, accessible 'spoiler text' component to hide text you do not want visible until the user clicks to reveal it.

[![NPM](https://img.shields.io/npm/v/react-spoiler-tag.svg)](https://www.npmjs.com/package/react-spoiler-tag) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Example](https://assets.codepen.io/62105/spoiler-example_1.gif?format=auto)

![Wrapping text example](https://assets.codepen.io/62105/spoiler-wraps_1.gif?format=auto)

## Install

```bash
npm install react-spoiler-tag
```

or

```bash
yarn add react-spoiler-tag
```

## Basic Usage

```jsx
import { Spoiler } from 'react-spoiler-tag'
import 'react-spoiler-tag/dist/index.css'

const SomeComponent = () => {
  return <Spoiler text='Super secret spoiler!' />
}
```

### With prop

```html
<Spoiler text="Super secret spoiler!" />
```

### With children

Passing in children is supported, **however**, as of now only with lines of text in mind. Wrapping complex entities like a card, list, image, table, etc. will yield undesired results.

```html
<Spoiler>Super secret <a>link</a>!</Spoiler>
```

## Props

```html
<Spoiler
  text="Super secret spoiler!"
  textColor="#000"
  hiddenColor="#2a2a2a"
  revealedColor="#9a9a9a"
  ariaLabelShowText="To reveal spoiler text click here."
  ariaLabelHideText="To hide spoiler text again click here."
/>
```

`text` - (Optional) Text to be covered by the spolier effect - `<string>`

`color` - (Optional) CSS _color_ value for the text. Default: _"inherit"_ - `<string>`

`hiddenColor` - (Optional) CSS _background-color_ value for the hidden background color. Default: _"#444"_ - `<string>`

`revealedColor` - (Optional) CSS _background-color_ value for the revealed background color. Default: _"#e2e2e2"_ - `<string>`

`ariaLabelShowText` - (Optional) Text for screenreaders when component is focused in hidden state. Default: _"To reveal spoiler text click here."_ - `<string>`

`ariaLabelHideText` - (Optional) Text for screenreaders when component is focused in revealed state. Default: _"To hide spoiler text again click here."_ - `<string>`

## Note on accessibility (a11y)

It is highly recommended to make use of the props `ariaLabelShowText` and `ariaLabelHideText`, if you are serving this component in other languages, as the default text for them is in English.

## Roadmap

- Support complex children content

## License

MIT © [dazulu](https://github.com/dazulu)
