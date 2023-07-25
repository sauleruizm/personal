import './navbar.css'
import { 
  activities, 
  dateNavbar, 
  logoutNavbar } from "./index";
export const navbar =()=> {

  const nav = document.createElement('navbar')
    nav.className = 'navbar' 
    nav.appendChild(activities())
    nav.appendChild(dateNavbar())
    nav.appendChild(logoutNavbar())
  return nav
}  