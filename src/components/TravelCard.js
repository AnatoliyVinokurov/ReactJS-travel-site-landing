import { useMemo } from "react";
import "./style.css";

const TravelCard = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsText2,
  priceText,
  locationText,
  locationDescription,
  imageDimensionsText3,
  imageDimensionsText4,
  imageDimensions2,
  travelCardWidth,
  travelCardHeight,
  travelCardPosition,
  groupDivTop,
  groupDivWidth,
  groupDivHeight,
  rectangleIconTop,
  rectangleIconWidth,
  rectangleIconHeight,
  rectangleIconWidth1,
  rectangleIconHeight1,
  rectangleIconTop1,
  rectangleIconLeft,
  rectangleIconBorderRadius,
  rectangleIconWidth2,
  rectangleIconHeight2,
  groupDivTop1,
  groupDivWidth1,
  groupDivWidth2,
  groupDivWidth3,
  frameDivWidth,
  frameDivLeft,
  groupDivTop2,
  groupDivWidth4,
  groupDivHeight1,
  groupDivWidth5,
  groupDivHeight2,
  groupDivWidth6,
  groupDivHeight3,
  loremIpsumIsWidth,
  rectangleIconWidth3,
  rectangleIconHeight3,
  rectangleIconWidth4,
  rectangleIconHeight4,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivFilter,
  ellipseDivWidth,
  ellipseDivHeight,
  frameDivLeft1,
  frameDivBoxShadow,
  frameDivBackdropFilter,
  frameDivWidth1,
  frameDivPadding,
  frameDivBoxShadow1,
}) => {
  const travelCardStyle = useMemo(() => {
    return {
      width: travelCardWidth,
      height: travelCardHeight,
      position: travelCardPosition,
    };
  }, [travelCardWidth, travelCardHeight, travelCardPosition]);

  const groupDivStyle = useMemo(() => {
    return {
      top: groupDivTop,
      width: groupDivWidth,
      height: groupDivHeight,
    };
  }, [groupDivTop, groupDivWidth, groupDivHeight]);

  const rectangleIconStyle = useMemo(() => {
    return {
      top: rectangleIconTop,
      width: rectangleIconWidth,
      height: rectangleIconHeight,
    };
  }, [rectangleIconTop, rectangleIconWidth, rectangleIconHeight]);

  const rectangleIcon1Style = useMemo(() => {
    return {
      width: rectangleIconWidth1,
      height: rectangleIconHeight1,
    };
  }, [rectangleIconWidth1, rectangleIconHeight1]);

  const rectangleIcon2Style = useMemo(() => {
    return {
      top: rectangleIconTop1,
      left: rectangleIconLeft,
      borderRadius: rectangleIconBorderRadius,
      width: rectangleIconWidth2,
      height: rectangleIconHeight2,
    };
  }, [
    rectangleIconTop1,
    rectangleIconLeft,
    rectangleIconBorderRadius,
    rectangleIconWidth2,
    rectangleIconHeight2,
  ]);

  const groupDiv1Style = useMemo(() => {
    return {
      top: groupDivTop1,
      width: groupDivWidth1,
    };
  }, [groupDivTop1, groupDivWidth1]);

  const groupDiv2Style = useMemo(() => {
    return {
      width: groupDivWidth2,
    };
  }, [groupDivWidth2]);

  const groupDiv3Style = useMemo(() => {
    return {
      width: groupDivWidth3,
    };
  }, [groupDivWidth3]);

  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  const groupDiv4Style = useMemo(() => {
    return {
      top: groupDivTop2,
      width: groupDivWidth4,
      height: groupDivHeight1,
    };
  }, [groupDivTop2, groupDivWidth4, groupDivHeight1]);

  const groupDiv5Style = useMemo(() => {
    return {
      width: groupDivWidth5,
      height: groupDivHeight2,
    };
  }, [groupDivWidth5, groupDivHeight2]);

  const groupDiv6Style = useMemo(() => {
    return {
      width: groupDivWidth6,
      height: groupDivHeight3,
    };
  }, [groupDivWidth6, groupDivHeight3]);

  const loremIpsumIsStyle = useMemo(() => {
    return {
      width: loremIpsumIsWidth,
    };
  }, [loremIpsumIsWidth]);

  const rectangleIcon3Style = useMemo(() => {
    return {
      width: rectangleIconWidth3,
      height: rectangleIconHeight3,
    };
  }, [rectangleIconWidth3, rectangleIconHeight3]);

  const rectangleIcon4Style = useMemo(() => {
    return {
      width: rectangleIconWidth4,
      height: rectangleIconHeight4,
    };
  }, [rectangleIconWidth4, rectangleIconHeight4]);

  const ellipseDivStyle = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      filter: ellipseDivFilter,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [
    ellipseDivTop,
    ellipseDivLeft,
    ellipseDivFilter,
    ellipseDivWidth,
    ellipseDivHeight,
  ]);

  const frameDiv2Style = useMemo(() => {
    return {
      left: frameDivLeft1,
      boxShadow: frameDivBoxShadow,
      backdropFilter: frameDivBackdropFilter,
      width: frameDivWidth1,
      padding: frameDivPadding,
    };
  }, [
    frameDivLeft1,
    frameDivBoxShadow,
    frameDivBackdropFilter,
    frameDivWidth1,
    frameDivPadding,
  ]);

  const frameDiv3Style = useMemo(() => {
    return {
      boxShadow: frameDivBoxShadow1,
    };
  }, [frameDivBoxShadow1]);

  return (
    <div className="travel-card" style={travelCardStyle}>
      <div className="group-parent">
        <div className="vector-parent" style={groupDivStyle}>
          <img
            className="group-child"
            alt=""
            src={imageDimensions}
            style={rectangleIconStyle}
          />
          <img
            className="group-item"
            alt=""
            src={imageDimensionsText}
            style={rectangleIcon1Style}
          />
          <img
            className="group-inner"
            alt=""
            src={imageDimensionsText2}
            style={rectangleIcon2Style}
          />
          <div className="group-wrapper" style={groupDiv1Style}>
            <div className="group-container" style={groupDiv2Style}>
              <div className="frame-parent" style={groupDiv3Style}>
                <div className="parent" style={frameDivStyle}>
                  <b className="b">{priceText}</b>
                  <div className="x-12-interest">x 12 interest free</div>
                </div>
                <div className="machu-picchu-peru">{locationText}</div>
              </div>
              <div className="see-more-wrapper" style={frameDiv1Style}>
                <div className="see-more">See More</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-frame" style={groupDiv4Style}>
          <div className="group-div" style={groupDiv5Style}>
            <div className="group-div" style={groupDiv6Style}>
              <b className="cappadocia">{locationDescription}</b>
              <div className="lorem-ipsum-is" style={loremIpsumIsStyle}>
                Lorem Ipsum is simply dummy text of the printing and...see more
              </div>
            </div>
          </div>
        </div>
        <img
          className="frame-child"
          alt=""
          src={imageDimensionsText3}
          style={rectangleIcon3Style}
        />
        <img
          className="frame-item"
          alt=""
          src={imageDimensionsText4}
          style={rectangleIcon4Style}
        />
        <div className="frame-inner" style={ellipseDivStyle} />
        <div className="frame-group" style={frameDiv2Style}>
          <div className="star-wrapper" style={frameDiv3Style}>
            <img className="star-icon" alt="" src={imageDimensions2} />
          </div>
          <div className="div">5.0</div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
