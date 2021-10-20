const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }
  
  const links = getElement('.nav_links')
  const navBtnDOM = getElement('.mobile_menu')
  
  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })
  
  const date = getElement('#date')
  const currentYear = new Date().getFullYear()
  date.textContent = currentYear
  