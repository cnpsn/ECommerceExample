import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgArrowLeft = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-left_svg__feather arrow-left_svg__feather-arrow-left"
    {...props}>
    <Path d="M19 12H5M12 19l-7-7 7-7" />
  </Svg>
);
export default SvgArrowLeft;
