import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SvgXCircle = props => (
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
    className="x-circle_svg__feather x-circle_svg__feather-x-circle"
    {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Path d="m15 9-6 6M9 9l6 6" />
  </Svg>
);
export default SvgXCircle;
