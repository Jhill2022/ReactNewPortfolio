import React from 'react';
import Img1 from '../../assets/portfolio1.jpg';
import { PortfolioStyled } from './PortfolioStyled';

const Portfolio = () => {
  return (
    <PortfolioStyled id="portfolio">
      <h5>My portfolio art</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <div className="portfolio__content">
          <div className="portfolio__items">
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Img1} alt="" />
              </div>

              <h3>Crypto Currency Dashboard</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.github.com" className="btn">
                  Github
                </a>
                <a href="" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Img1} alt="" />
              </div>

              <h3>Crypto Currency Dashboard</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.github.com" className="btn">
                  Github
                </a>
                <a href="" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Img1} alt="" />
              </div>

              <h3>Crypto Currency Dashboard</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.github.com" className="btn">
                  Github
                </a>
                <a href="" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Img1} alt="" />
              </div>

              <h3>Crypto Currency Dashboard</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.github.com" className="btn">
                  Github
                </a>
                <a href="" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Img1} alt="" />
              </div>

              <h3>Crypto Currency Dashboard</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.github.com" className="btn">
                  Github
                </a>
                <a href="" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Img1} alt="" />
              </div>

              <h3>Crypto Currency Dashboard</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.github.com" className="btn">
                  Github
                </a>
                <a href="" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PortfolioStyled>
  );
};

export default Portfolio;
