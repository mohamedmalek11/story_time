import "./style.css";
import CarouselList from "../../components/carousel";
import ProductCard from "../../components/productCard/productCard";

import {
  AnimalsIcon,
  FairyTalesIcon,
  PrincessIcon,
  ProphetsIcon,
} from "../../assets/images";

const products = [
  {
    id: "a23ij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "Cinderella's Enchanted Evening",
    description: "A classic tale of dreams and magic.",
  },
  {
    id: "aweg3ij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "The Brave Little Tailor",
    description: "A tailor's wit saves the day.",
  },
  {
    id: "a2weffweij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "The Dragon's Secret",
    description: "A dragon with a hidden heart.",
  },
  {
    id: "a23pppklij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "Cinderella's Enchanted Evening",
    description: "A classic tale of dreams and magic.",
  },
  {
    id: "awwcweeg3ij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "The Brave Little Tailor",
    description: "A tailor's wit saves the day.",
  },
  {
    id: "a2wef767eij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "The Dragon's Secret",
    description: "A dragon with a hidden heart.",
  },
  {
    id: "asdgrw23ij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "Cinderella's Enchanted Evening",
    description: "A classic tale of dreams and magic.",
  },
  {
    id: "awasfeg3ij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "The Brave Little Tailor",
    description: "A tailor's wit saves the day.",
  },
  {
    id: "a2wfwj",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "The Dragon's Secret",
    description: "A dragon with a hidden heart.",
  },
  {
    id: "awfeg3ij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "The Brave Little Tailor",
    description: "A tailor's wit saves the day.",
  },
  {
    id: "afsweij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "The Dragon's Secret",
    description: "A dragon with a hidden heart.",
  },
  {
    id: "awasg3ij",
    image: "https://i.ibb.co/LdQkHkLT/Depth-7-Frame-0.png",
    name: "The Brave Little Tailor",
    description: "A tailor's wit saves the day.",
  },
];

function Home() {
  return (
    <div className="home">
      <section className="home-hero home-section">
        <img
          className="b-radius"
          src={require("../../assets/images/palceholders/1.png")}
          alt="story"
        />
        <div className="hero-content">
          <p className="title">The Magical Treehouse Adventure</p>
          <p className="text">
            Join Clara and Leo on an enchanting journey through time and space
            in their magical treehouse.
          </p>
          <button className="btn btn-primary">Read Now</button>
        </div>
      </section>
      <section className="categoties home-section">
        <p className="title">Categoties</p>
        <ul className="categories-list">
          <li className="category-item b-radius-m ">
            <FairyTalesIcon />
            <p className="category-title">Fairy Tales</p>
          </li>
          <li className="category-item b-radius-m ">
            <ProphetsIcon />
            <p className="category-title">Stories of Prophets</p>
          </li>
          <li className="category-item b-radius-m ">
            <AnimalsIcon />
            <p className="category-title">Animal Stories</p>
          </li>
          <li className="category-item b-radius-m ">
            <PrincessIcon />
            <p className="category-title">Princess Stories</p>
          </li>
        </ul>
      </section>

      <section className="home-section">
        <p className="title">Fairy Tales</p>
        <div>
          <CarouselList
            data={products}
            itemsPerRow={4}
            itemsPerRowMobile={1}
            ItemComponent={ProductCard}
            itemSpacing={"20px"}
            autoplay={"autoplay"}
            autoplayDelay={4000}
            loop={true}
            navigation={() => <div></div>}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
