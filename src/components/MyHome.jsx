import MyHeader from './MyHeader';
import MyCardPizza from './MyCardPizza';
import { pizzas } from '../pizzas'

const MyHome = () => (
  <>
    <MyHeader />
    <div className="container mt-4">
      <div className="row justify-content-center">
       
      {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <MyCardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}

      </div>
    </div>
  </>
);
export default MyHome;
