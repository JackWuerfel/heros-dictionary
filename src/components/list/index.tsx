import { v4 as uuidv4 } from "uuid";

import "./list.scss";

const List = ({ heros, loading }: any) => {
  const placeholderImage =
    "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const onImageError = (e:any) => {
    e.target.src = placeholderImage;
  };
  return loading ? (
    <div className="list"><h2 className="title">Loading</h2></div>
  ) : (
    <>
      {heros.map((data: any, index: any) => (
        <div className="list" key={index + uuidv4()}>
          <div>
            <img
              className="list__image bordered"
              src={data?.image?.url ? data?.image?.url : placeholderImage}
              alt="hero image"
              onError={onImageError}
            />
          </div>
          <div>
            <p>
              {data?.name}{" "}
              {data?.name !== data?.biography?.["full-name"] && (
                <>
                  <br />{" "}
                  <span className="small">
                    {data?.biography?.["full-name"]}
                  </span>
                </>
              )}
            </p>
          </div>
          <div>
            <p>
              {data?.biography?.publisher
                ? data?.biography?.publisher
                : "No Publisher Found"}
            </p>
          </div>
          <div>
            <p>
              {data?.biography?.alignment && data?.biography?.alignment !== "-"
                ? data?.biography?.alignment
                : "No Alignment Found"}
            </p>
          </div>
          <div>
            <button>View Details</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
