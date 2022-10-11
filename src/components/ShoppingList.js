import { plantList } from '../data/plantList.js'

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
			<ul>
				{plantList.map((plant) => (
					<li>{plant.isBestSale && <span>🔥</span>}</li>
				))}

			</ul>
		</div>
	)
}

export default ShoppingList