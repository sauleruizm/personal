import moment from "moment/moment";
import './dateNavbar.css'
export const dateNavbar = ()=> {

  const date = document.createElement('span')
  
  const timeoutId = setTimeout(() => {
    date.innerText =moment().format('MMM DD  hh:mm a');    
    }, 1000);

  date.className = 'dateNavbar'

  return date
}