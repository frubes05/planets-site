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
          </section>
        ))}
    </>
  );
};
