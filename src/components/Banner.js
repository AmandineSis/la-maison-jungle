import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'   
const title = "La maison Jungle"

function Banner (){
  return (
  <div className='lmj-banner'>
    <div className='lmj-header'>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>{ title.toUpperCase()}</h1>
    </div>
    <Recommendation />
  </div>

)}


export default Banner