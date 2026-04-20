import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import napolitanaImg from "../assets/Napoli.png";
import espanolaImg from "../assets/Espanola.png";
import pepperoniImg from "../assets/Peppe.png";

const pizzas = [
  {
    name: "Pizza Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: napolitanaImg,
  },
  {
    name: "Pizza Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: espanolaImg,
  },
  {
    name: "Pizza Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: pepperoniImg,
  },
];

const Home = () => {
  return (
    <>
      <Header />

      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <CardPizza key={index} {...pizza} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;