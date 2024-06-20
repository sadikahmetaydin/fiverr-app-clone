import React from 'react';
// Style Connection
import './Home.css';
// Component Connections
import Featured from '../../Components/Featured/Featured';
import TrustedBy from '../../Components/TrustedBy/TrustedBy';
import Slide from '../../Components/Slide/Slide';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
// Cards Data Connection
import { cards } from '../../data';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />

      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CategoryCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
