import CareScale from "./CareScale";
import '../styles/PlantItem.css'

function PlantItem ({name, cover, id, light, water}){

   return <li key={id} onClick={() => handleClick(name)} className='lmj-plant-item'>
        <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
        <p className="lmj-plant-name">{name}</p>
        <div className="lmj-plant-care">
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </div>
    
    </li>
  
}

function handleClick(plantName) {
    alert(`✨ Vous avez ajouté 1 ${plantName} à votre panier✨`)
}

export default PlantItem