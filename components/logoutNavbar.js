import speaker  from "gnomicon/dist/svg/about.svg"

export const logoutNavbar = ()=> {

  const date = document.createElement('span') 
  const img = document.createElement('img')
  img.src = speaker 
  date.appendChild(img)
  date.className = 'dateNavbar'

  return date
}