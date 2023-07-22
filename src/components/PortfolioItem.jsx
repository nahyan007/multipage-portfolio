import React, { useState } from "react";
import Close from "../assets/close.svg";
import '../pages/portfolio/Portfolio.css';

const PortfolioItem = ({ img, title, details, id }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="portfolio__item">
      <img src={img} alt={id} className="portfolio__img" />

      <div className="portfolio__hover" onClick={() => setModal(!modal)}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img src={Close} alt="close" className="modal__close" onClick={()=> setModal(!modal)} />

            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => (
                <li className="modal__item" key={index}>
                  <span className="item__icon">{icon}</span>

                  <div>
                    <span className="item__title">{title}</span>
                    <span className="item__details">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
