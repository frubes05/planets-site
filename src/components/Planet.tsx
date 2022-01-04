import { useParams } from "react-router-dom";
import { Information } from "./Information";

export const Planet = ({ data }: any) => {
  const params = useParams();
  const planet = data.filter((p: any) => p.name === params.planet);

  return (
    <>
      {planet &&
        planet.map((p: any) => (
          <section className="planet" key={p.name}>
            <Information planet={p} ></Information>
            <ul className="planet__details">
                <div className="planet__details__wrapper">
                    <p className="planet__details__title">ROTATION TIME</p>
                    <p className="planet__details__info">{p.rotation}</p>
                </div>
                <div className="planet__details__wrapper">
                    <p className="planet__details__title">REVOLUTION TIME</p>
                    <p className="planet__details__info">{p.revolution}</p>
                </div>
                <div className="planet__details__wrapper">
                    <p className="planet__details__title">RADIUS</p>
                    <p className="planet__details__info">{p.radius}</p>
                </div>
                <div className="planet__details__wrapper">
                    <p className="planet__details__title">AVERAGE TEMP</p>
                    <p className="planet__details__info">{p.temperature}</p>
                </div>
            </ul>
          </section>
        ))}
    </>
  );
};
