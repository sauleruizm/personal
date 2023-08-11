import './logoutNavbar.css'
import IoPowerOutline from '../public/power-outline.svg'
import IoVolumeHighOutline from '../public/volume-high-outline.svg'

export const logoutNavbar = ()=> {

  const date = document.createElement('span') 
  
  const imgPower = document.createElement('img')
  imgPower.src = IoPowerOutline 
  imgPower.className = 'grow'
  
  const imgSound = document.createElement('img')
  imgSound.src = IoVolumeHighOutline 
  imgSound.className = 'grow'
  
  
  date.appendChild(imgSound)
  date.appendChild(imgPower)
  date.className = 'logout-right-bar'

  return date
}