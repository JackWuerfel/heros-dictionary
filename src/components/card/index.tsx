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
  children,
  classes,
  direction = "column",
  size,
  marginTop,
  marginBottom,
}: CardProps) => {
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
        {children}
      </div>
    </div>
  );
};

export default Card;
