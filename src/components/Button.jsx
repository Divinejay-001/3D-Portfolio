import React from 'react'

const Button = ({ text, className, id }) => {
  const handleClick = (e) => {
    e.preventDefault()

    const target = document.getElementById(id) // use the id prop here
    if (target) {
      const offset = window.innerHeight * 0.15
      const top = target.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }

  return (
    <a
      href={`#${id}`} // fallback in case JS fails
      onClick={handleClick}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button
