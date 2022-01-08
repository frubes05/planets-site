import { useState, useEffect } from "react";

import planetImages from "../images";

export const Information = ({ planet }: any) => {
  const [separateData, setSeparateData] = useState<any>(null);
  const [type, setType] = useState<string>("overview");
  const [currentImage, setCurrentImage] = useState<any>("");

  useEffect(() => {
    const imagesElement = planetImages.filter(
      (elem) => elem.name === planet.name
    )[0];
    setCurrentImage(imagesElement);
  }, [type, planet.name]);

  const handleShownInformation = (type: string, index: number) => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn, i) => {
      index === i ? btn.classList.add("planet__article__button--active") : btn.classList.remove("planet__article__button--active");
    })
    
    setType(type);
    const specifics = [
      {
        content: planet[type].content,
        source: planet[type].source,
      },
    ];
    setSeparateData(specifics);
  };

  return (
    <article className="planet__article">
      {currentImage && (
        <div className="planet__article__show">
          <img
            className="planet__article__image"
            src={`${currentImage[type]}`}
            alt={`${currentImage.name}`}
          ></img>
        </div>
      )}
      <ul className="planet__article__details">
        <div className="planet__article__texts">
        <h2 className="planet__article__title">{planet.name}</h2>
        {!separateData && (
          <>
            <p className="planet__article__text">{planet.overview.content}</p>
            <small className="planet__article__source">
              <span className="planet__article__source--text">Source:</span>
              <a href={`${planet.overview.source}`}>Wikipedia</a>
            </small>
          </>
        )}
        {separateData &&
          separateData.map((el: any, id: number) => (
            <>
              <p className="planet__article__text">{el.content}</p>
              <small className="planet__article__source">
                <span className="planet__article__source--text">Source:</span>
                <a href={`${el.source}`}>Wikipedia</a>
              </small>
            </>
          ))}
        </div>
        <div className="planet__article__show--mobile">
          <img
            className="planet__article__image"
            src={`${currentImage[type]}`}
            alt={`${currentImage.name}`}
          ></img>
        </div>
        <ul className="planet__article__buttons">
          <button className="planet__article__button planet__article__button--active" onClick={() => handleShownInformation("overview", 0)}>
            <span className="planet__article__button--number">01</span>
            <span className="planet__article__button--text">OVERVIEW</span>
          </button>
          <button className="planet__article__button" onClick={() => handleShownInformation("structure", 1)}>
            <span className="planet__article__button--number">02</span>
            <span className="planet__article__button--text">INTERNAL STRUCTURE</span>
          </button>
          <button className="planet__article__button" onClick={() => handleShownInformation("geology", 2)}>
            <span className="planet__article__button--number">03</span>
            <span className="planet__article__button--text">SURFACE GEOLOGY</span>
          </button>
        </ul>
      </ul>
      <ul className="planet__details">
                <div className="planet__details__wrapper">
                    <p className="planet__details__title">ROTATION TIME</p>
                    <p className="planet__details__info">{planet.rotation}</p>
                </div>
                <div className="planet__details__wrapper">
                    <p className="planet__details__title">REVOLUTION TIME</p>
                    <p className="planet__details__info">{planet.revolution}</p>
                </div>
                <div className="planet__details__wrapper">
                    <p className="planet__details__title">RADIUS</p>
                    <p className="planet__details__info">{planet.radius}</p>
                </div>
                <div className="planet__details__wrapper">
                    <p className="planet__details__title">AVERAGE TEMP</p>
                    <p className="planet__details__info">{planet.temperature}</p>
                </div>
            </ul>
    </article>
  );
};
