//PACKAGE IMPORTS
import classNames from "classnames";

//INTERNAL IMPORTS
import "./card.scss";
import { CardProps } from "./types";

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Global Card Component
/*----------------------------------------------------------------------------*/

const Card = ({
  alignmentVertical = "center",
  alignmentHorizontal = "center",
  classes,
  data,
  direction = "column",
  size,
  marginTop,
  marginBottom,
}: CardProps) => {
  const placeholderImage =
    "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const onImageError = (e: any) => {
    e.target.src = placeholderImage;
  };

  return (
    <div
      data-testid="card"
      className={classNames(
        size ? `card--size-${size}` : "",
        marginTop ? `card--margin-top--${marginTop}` : "",
        marginBottom ? `card--margin-bottom--${marginBottom}` : ""
      )}
    >
      <div
        className={classNames(
          "card",
          `card--alignment-horizontal--${alignmentHorizontal}`,
          `card--alignment-vertical--${alignmentVertical}`,
          `card--direction--${direction}`,
          classes
        )}
      >
        <img
          src={data?.image?.url ? data?.image?.url : placeholderImage}
          alt="hero image"
          className="card__image"
          onError={onImageError}
        />
          <p>{data?.id}</p>
          <p>{data?.name}</p>
      </div>
    </div>
  );
};

export default Card;
