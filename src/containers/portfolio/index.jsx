import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/image1.jpeg";
import ImageTwo from "../../images/image2.jpeg";
import ImageThree from "../../images/image3.jpeg";
import ImageFour from "../../images/image4.jpeg";
import ImageFive from "../../images/image5.jpeg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Notes App",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterID: 1,
    label: "All",
  },
  {
    filterID: 2,
    label: "Development",
  },
  {
    filterID: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null)

  function handleFilter(currentID) {
    setFilteredValue(currentID);
  }

  function handleHover(index){
     setHoveredValue(index)
  }

  console.log("==================");
  console.log(hoveredValue);
  console.log("==================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterID === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterID)}
              key={item.filterID}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item,index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(index)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="" src={item.image} />
                </a>
              </div>
              <div className="overlay">

              {
                index === hoveredValue && (
                  <div>
                     <p>{item.name}</p>
                     <button>Visit</button>
                  </div>
                )
              }
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
