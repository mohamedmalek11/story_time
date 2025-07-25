import "./style.css";
import {
  AnimalsIcon,
  FairyTalesIcon,
  PrincessIcon,
  ProphetsIcon,
} from "../../assets/images";

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
        <p className="title">Featured Stories</p>
        <div></div>
      </section>
    </div>
  );
}

export default Home;
