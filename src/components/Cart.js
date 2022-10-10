import '../styles/Cart.css'

const monsteraPrix = 8;
const lierrePrix = 10;
const fleurPrix  = 15;

function Cart(){
  return(<div className="lmj-cart">  
    <h2>Panier</h2>
      <ul>
      <li>Monstera: {monsteraPrix}</li>
      <li>Lierre: {lierrePrix}</li>
      <li>Bouquet de fleur: {fleurPrix}</li>
  </ul>
      <p>Total : <span>{monsteraPrix + lierrePrix + fleurPrix}</span></p>
  </div>)
}

export default Cart