import { v4 as uuidv4 } from "uuid";

import "./list.scss";

const List = ({ heros, loading }: any) => {
  return loading ? (
    <div className="list">
      <h2 className="title loading">Loading</h2>
    </div>
  ) : (
    <>
      {heros.map((data: any, index: any) => (
        <div className="list" key={index + uuidv4()}>
          <div className="list__column--small">
            <p>{data?.id}</p>
          </div>
          <div className="list__column">
            <p>{data?.name}</p>
          </div>
          <div className="list__column">
            {data?.name !== data?.biography?.["full-name"] &&
            data?.biography?.["full-name"] !== "" ? (
              <p>{data?.biography?.["full-name"]}</p>
            ) : (
              <p>No Real Name Found</p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
