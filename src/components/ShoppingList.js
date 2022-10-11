import { plantList } from '../data/plantList.js'
import '../styles/ShoppingList.css'

function ShoppingList() {
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
					<li key={plant.id} className='lmj-plant-item'>
                        {plant.name}{plant.isBestSale && <span>🔥</span>}
                        {plant.isSpecialOffer ? <div key={plant.id} className='lmj-sales'>Soldes</div> : null}
                    </li>
				))}

			</ul>
		</div>
	)
}

export default ShoppingList