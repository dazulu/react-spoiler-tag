# react-spoiler-tag

> A lightweight, accessible 'spoiler text' component to hide text you do not want visible until the user clicks to reveal it.

[![NPM](https://img.shields.io/npm/v/react-spoiler-tag.svg)](https://www.npmjs.com/package/react-spoiler-tag) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Example](https://assets.codepen.io/62105/spoiler-example.gif?format=auto)

![Wrapping text example](https://assets.codepen.io/62105/spoiler-wrap.gif?format=auto)

## Install

```bash
npm install react-spoiler-tag
```

or

```bash
yarn add react-spoiler-tag
```

## Usage

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

Passing in children is supported, **however**, version `1.0.0` has been created with lines of text in mind. Throwing in more complex entities like a card, list, image, table, etc. will yield undesired results.

```html
<Spoiler>Super secret <a>link</a>!</Spoiler>
```

## Accessibility Note

It is highly recommended to make use of the props `ariaLabelShowText` and `ariaLabelHideText`, if you are serving this component in other languages, as the default text for them is in English.

## Props

`text` - (Optional) Text to be covered by the spolier effect - `<string>`

`color` - (Optional) CSS _color_ value for the text. Default: _"inherit"_ - `<string>`

`ariaLabelShowText` - (Optional) Text for screenreaders when component is focused in hidden state. Default: _"To reveal spoiler text click here."_ - `<string>`

`ariaLabelHideText` - (Optional) Text for screenreaders when component is focused in revealed state. Default: _"To hide spoiler text again click here."_ - `<string>`

## Roadmap

- Support complex children content

## License

MIT © [dazulu](https://github.com/dazulu)
