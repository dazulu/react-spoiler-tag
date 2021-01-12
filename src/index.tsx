import * as React from 'react'
import styles from './styles.module.css'

interface SpoilerProps {
  text?: string
  textColor?: string
  hiddenColor?: string
  revealedColor?: string
  ariaLabelShowText?: string
  ariaLabelHideText?: string
}

export const Spoiler: React.FunctionComponent<SpoilerProps> = ({
  text = null,
  textColor = 'inherit',
  hiddenColor = 'currentColor',
  revealedColor = 'transparent',
  ariaLabelShowText = 'To reveal spoiler text click here.',
  ariaLabelHideText = 'To hide spoiler text again click here.',
  children
}) => {
  const [isHidden, setHidden] = React.useState<boolean>(true)

  const toggleHidden = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement
    /*
     * Want to avoid triggering a change in state if
     * user intent is clicking a nested link or button
     */
    if (element.tagName !== 'A' && element.tagName !== 'BUTTON') {
      setHidden(!isHidden)
    }
  }

  return (
    <span
      onClick={toggleHidden}
      className={`spoiler-text ${styles.contents} ${
        isHidden ? styles['is--hidden'] : ''
      }`}
      style={{ backgroundColor: isHidden ? hiddenColor : revealedColor }}
      aria-label={isHidden ? ariaLabelShowText : ariaLabelHideText}
      role='button'
      tabIndex={0}
    >
      <span role='alert' style={{ color: textColor }}>
        {children || text}
      </span>
    </span>
  )
}
