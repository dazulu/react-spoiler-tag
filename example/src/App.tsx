import React from 'react'

import { Spoiler } from 'react-spoiler-tag'
import 'react-spoiler-tag/dist/index.css'

const App = () => {
  return (
    <>
      <h1>some text</h1>
      <p style={{ fontSize: '20px' }}>
        Lorem ipsum delor <Spoiler>Super secret spoiler reveal</Spoiler>
      </p>
      <p style={{ fontSize: '1.4em', margin: '2em' }}>
        Did you know{' '}
        <Spoiler text="we're no strangers to love. You know the rules and so do I." />{' '}
        That's what happened!
      </p>
      <p>
        <Spoiler text='Super secret spoiler reveal 🕵️‍♂️' /> Lorem ipsum delor
      </p>
      <p>
        This is a{' '}
        <Spoiler>
          Super secret{' '}
          <a href='/' target='_blank'>
            link
          </a>
          !
        </Spoiler>
      </p>
      <div></div>
    </>
  )
}

export default App
