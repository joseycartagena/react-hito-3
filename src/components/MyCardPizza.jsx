import Card from 'react-bootstrap/Card';

const MyCardPizza = ({ name, price, ingredients, img }) => (
  <div className="card card-pizza">
    <img src={img} alt={name} className="card-img-top" />
    <div className="card-body d-flex flex-column justify-content-between">
      <h2 className="card-title mb-3">Pizza {name}</h2>
      <div>
        <p className="mb-0">Ingredientes:</p>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, blue) => (
            <li key={blue}>{ingredient}.</li>
          ))}
        </ul>
      </div>
      <h4>
        Precio: ${price.toLocaleString()}
      </h4>
    </div>
    <div className="card-footer d-flex justify-content-between">
      <button className="btn btn-outline-dark btn-ver-mas">Ver más</button>
      <button className="btn btn-dark btn-añadir">Añadir</button>
    </div>
  </div>
);
export default MyCardPizza;