import CareScale from "./CareScale";
import plant from '../assets/monstera.jpg'
import '../styles/PlantItem.css'

function PlantItem ({name, cover, id, light, water}){

   return <div>
        <img src={plant} alt="plante" className="lmj-plant-item-cover" />
        <div>
            <div className="lmj-plant-item">water
            <CareScale careType='water' scaleValue={water} />
            </div>
            <div className="lmj-plant-item">Light 
            <CareScale careType='light' scaleValue={light} />
            </div>
        </div>
    
    </div>
  
}

export default PlantItem