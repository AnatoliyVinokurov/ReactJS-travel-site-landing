import { useMemo } from "react";
import './style.css'

const Property1ActiveRight = ({
  dimensions,
  property1ActiveRightBoxShadow,
  property1ActiveRightPosition,
  rectangleDivBackgroundColor,
  iconNavArrowRightHeight,
  iconNavArrowRightWidth,
  iconNavArrowRightTop,
  iconNavArrowRightRight,
  iconNavArrowRightBottom,
  iconNavArrowRightLeft,
}) => {
  const property1ActiveRightStyle = useMemo(() => {
    return {
      boxShadow: property1ActiveRightBoxShadow,
      position: property1ActiveRightPosition,
    };
  }, [property1ActiveRightBoxShadow, property1ActiveRightPosition]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const iconNavArrowRightStyle = useMemo(() => {
    return {
      height: iconNavArrowRightHeight,
      width: iconNavArrowRightWidth,
      top: iconNavArrowRightTop,
      right: iconNavArrowRightRight,
      bottom: iconNavArrowRightBottom,
      left: iconNavArrowRightLeft,
    };
  }, [
    iconNavArrowRightHeight,
    iconNavArrowRightWidth,
    iconNavArrowRightTop,
    iconNavArrowRightRight,
    iconNavArrowRightBottom,
    iconNavArrowRightLeft,
  ]);

  return (
    <div className="property-1active-right" style={property1ActiveRightStyle}>
      <div className="property-1active-right-child" style={rectangleDivStyle} />
      <img
        className="icon-nav-arrow-right"
        alt=""
        src={dimensions}
        style={iconNavArrowRightStyle}
      />
    </div>
  );
};

export default Property1ActiveRight;
