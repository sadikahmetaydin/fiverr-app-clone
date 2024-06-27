import React from 'react';
// Style Connection
import './Home.css';
// Component Connections
import Featured from '../../Components/Featured/Featured';
import TrustedBy from '../../Components/TrustedBy/TrustedBy';
import Slide from '../../Components/Slide/Slide';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
// Cards Data Connection
import { cards, projects } from '../../data';

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

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>

            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              {' '}
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              {' '}
              Find the right freelancer to begin working on your project within
              minutes.
            </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              {' '}
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              24/7 support
            </div>
            <p>
              {' '}
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>

          <div className="item">
            <video
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/e0f330e4c8d6e3bf843a3bd3164fa275-1706087048062/How%20Fiverr%20Works%20EN%20Subs%2016x9"
              controls
            ></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <i>business</i>
            </h1>

            <h1>
              A business solution designed for <i>teams</i>
            </h1>

            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>

          <div className="item">
            <img
              className="right-image"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
