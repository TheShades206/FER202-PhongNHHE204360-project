import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";

const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: menu1,
    price: 20.00,
    salePrice: 14.00,
    sale: true,
    description: "Classic Margherita Pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
  },
  {
    id: 2,
    name: "Mushroom Pizza",
    image: menu2,
    price: 22.00,
    salePrice: 17.00,
    sale: false,
    description: "Savory Mushroom Pizza loaded with wild mushrooms, melted cheese, and garlic herbs.",
  },
  {
    id: 3,
    name: "Hawaiian Pizza",
    image: menu3,
    price: 19.00,
    salePrice: 16.00,
    sale: true,
    description: "Delicious Hawaiian Pizza topped with sweet pineapple chunks, sliced ham, and mozzarella.",
  },
  {
    id: 4,
    name: "Pesto Pizza",
    image: menu4,
    price: 23.00,
    salePrice: 17.00,
    sale: true,
    description: "Fragrant Pesto Pizza with a rich basil pesto base, cherry tomatoes, and parmesan.",
  }
];

export default pizzas;
