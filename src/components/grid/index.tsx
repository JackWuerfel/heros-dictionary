import { v4 as uuidv4 } from "uuid";

import "./grid.scss";
import Card from "../card";

const Grid = ({ heros, loading }: any) => {
  return loading ? (
    <div className="grid">
      <h2 className="title loading">Loading</h2>
    </div>
  ) : (
    <div className="grid">
      {heros.map((data: any, index: any) => (
        <Card key={index + uuidv4()} size="quarter" data={data} />
      ))}
    </div>
  );
};

export default Grid;
