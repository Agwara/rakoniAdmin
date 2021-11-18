import React, {useEffect, useState} from "react";

import quoteStyles from "./QuoteCarousel.module.css"

const quotes = {
  "1": ["albert einstein", "Education is what remains after one has forgotten what one has learned in school"],
  "2": ["nelson mandela", "Education is the most powerful weapon which you can use to change the world"],
  "3": ["mahatma gandhi", "Live as if you were to die tomorrow. Learn as if you were to live forever"]
}

const QuoteCarousel = () => {
  const [numberTimer, setNumberTimer] = useState(1)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (numberTimer === 3) {
        setNumberTimer(1)
      } else {
        setNumberTimer(numberTimer + 1)
      }
    }, 4000)
    
    return () => clearTimeout(timeout);
  })

  return (
    <div className={quoteStyles.container}>
      <div className={quoteStyles.quoteContent}>
        <p className={quoteStyles.quoteText}>"{quotes[String(numberTimer)][1]}" <span>{quotes[String(numberTimer)][0]}</span></p>
      </div>

      <ul className={quoteStyles.navContainer}>
        <li className={numberTimer === 1 ? `${quoteStyles.activeItem}` : `${quoteStyles.navItem}`}></li>
        <li className={numberTimer === 2 ? `${quoteStyles.activeItem}` : `${quoteStyles.navItem}`}></li>
        <li className={numberTimer === 3 ? `${quoteStyles.activeItem}` : `${quoteStyles.navItem}`}></li>
      </ul>
    </div>
  )
}

export default QuoteCarousel