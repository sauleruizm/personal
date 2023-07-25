import './desktopBorder.css'
import { navbar } from "./navbar";
export const desktopBorder =()=>  {

  const secBorder = document.createElement('div')
  secBorder.className = 'desktopBorder'
  secBorder.appendChild(navbar())
  return secBorder 
}