import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import pizzas from "../data/pizzas";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} {...pizza} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;