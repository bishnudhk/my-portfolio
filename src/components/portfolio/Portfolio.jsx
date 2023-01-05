import React from "react";
import "./Portfolio.css";
import IMG1 from "../images/portfolio6.jpg";
import IMG2 from "../images/portfolio2.jpg";
import IMG3 from "../images/portfolio3.jpg";
import IMG4 from "../images/portfolio4.jpg";
import IMG5 from "../images/portfolio5.jpg";

const data = [
{
  id:1,
  image: IMG1,
  title:'This is mobile application which is done by using flutter',
  github:'https://github.com/bishnudhk',
  demo:'https://dribbble.com/'
},
{
  id:1,
  image: IMG2,
  title:'This is mobile application which is done by using flutter',
  github:'https://github.com/bishnudhk',
  demo:'https://dribbble.com/'
},
{
  id:1,
  image: IMG3,
  title:'This is mobile application which is done by using flutter',
  github:'https://github.com/bishnudhk',
  demo:'https://dribbble.com/'
},
{
  id:1,
  image: IMG4,
  title:'This is mobile application which is done by using flutter',
  github:'https://github.com/bishnudhk',
  demo:'https://dribbble.com/'
},
{
  id:1,
  image: IMG5,
  title:'This is mobile application which is done by using flutter',
  github:'https://github.com/bishnudhk',
  demo:'https://dribbble.com/'
}
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        // map through the data arrray 
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="title" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github}className="btn">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          )
        })
      }

        
      </div>
    </section>
  );
};

export default Portfolio;
