import '../styles/Banner.css'
import logo from '../assets/logo.png'

const title = "La maison Jungle"

function Banner (){
  return (
  <div className='lmj-banner'>
    <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>{ title.toUpperCase()}</h1>
  </div>
)}


export default Banner