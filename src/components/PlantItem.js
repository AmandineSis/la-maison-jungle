import CareScale from "./CareScale";
import '../styles/PlantItem.css'

function PlantItem ({name, cover, id, light, water}){

   return <li key={id}>
        <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
        <div>
            <div className="lmj-plant-item">water
            <CareScale careType='water' scaleValue={water} />
            </div>
            <div className="lmj-plant-item">Light 
            <CareScale careType='light' scaleValue={light} />
            </div>
        </div>
    
    </li>
  
}

export default PlantItem