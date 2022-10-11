import { plantList } from '../data/plantList.js'
import '../styles/ShoppingList.css'
//import CareScale from './CareScale.js'
import PlantItem from './PlantItem.js'


function ShoppingList({children}) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
			{plantList.map((plant) => (
				<li>
				<PlantItem 
					key={plant.id}
					name={plant.name} 
					cover={plant.cover}
					light={plant.light}
					water={plant.water}>
					{children}
            	</PlantItem>
				</li>
			))}
			</ul>
            
		</div>
	)
}

export default ShoppingList