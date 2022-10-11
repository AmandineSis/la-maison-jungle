import CareScale from "./CareScale";
import { plantList } from "../data/plantList";

function PlantItem ({name, cover, id}){

   return <div className="lmj-plant-item-cove">
    <ul className='lmj-plant-list'>
            {plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
                        {plant.name}{plant.isBestSale && <span>🔥</span>}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                       
                    </li>
				))}

			</ul>
    <CareScale careType='water' scaleValue={plant.water} />
    <CareScale careType='light' scaleValue={plant.light} />
   </div>
    
}

export default PlantItem