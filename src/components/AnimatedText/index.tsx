import React, { useState, useRef, ReactNode, ReactElement, MouseEvent } from 'react'
import classes from './AnimatedText.module.css'

interface AnimatedTextProps {
  textColor: string;
  overlayColor: string;
  children: ReactNode;
}

let mousePosition = {
  x: 0,
  y: 0
}

const AnimatedText = ( props: AnimatedTextProps ): ReactElement => {
  const {
    textColor,
    overlayColor,
    children,
    ...rest
  } = props

  const containerElem = useRef( null )
  const initialMousePos = {
    x: 0,
    y: 0
  }

  const [ mousePos, setMousePos ] = useState( initialMousePos )

  const handleMouseMove = ( event: MouseEvent<HTMLElement> ): void => {
    const { nativeEvent } = event
    const elem = containerElem.current ? containerElem.current : {
      offsetLeft: 0,
      offsetTop: 0,
      clientWidth: 0,
      clientHeight: 0
    }
    const newX = elem && Math.floor( ( nativeEvent.pageX - elem.offsetLeft ) / elem.clientWidth * 100 )
    const newY = elem && Math.floor( ( nativeEvent.pageY - elem.offsetTop ) / elem.clientHeight * 100 )
    const newMousePos = {
      x: newX as number,
      y: newY as number
    }
    mousePosition = newMousePos
    setMousePos( mousePosition )
  }

  const handleMouseOut = (): void => {
    return setMousePos( mousePosition )
  }

  return (
    <section
      className={classes.animatedTextContainer}
      style={{
        /*
        //@ts-ignore */
        '--maskX': mousePos.x,
        '--maskY': mousePos.y
      }}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      ref={containerElem}
      {...rest}
    >
      <h1
        style={{
          color: textColor
        }}
        className={classes.animatedTextContent}
      >
        {children}
      </h1>
      <h1
        style={{
          color: overlayColor
        }}
        className={classes.animatedTextContentClone}
      >
        {children}
      </h1>
    </section>
  )
}

export default AnimatedText
