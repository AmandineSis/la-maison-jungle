import CareScale from "./CareScale";
import '../styles/PlantItem.css'

function handleClick(plantName) {
    alert(`✨ Vous avez ajouté 1 ${plantName} à votre panier✨`)
}

function PlantItem ({name, cover, id, light, water}){

   return <li key={id} className='lmj-plant-item' onClick={() => handleClick}>
        <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
        <p className="lmj-plant-name">{name}</p>
        <div >
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light}/>
        </div>
    
    </li>
  
}





export default PlantItem