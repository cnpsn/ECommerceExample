import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHome = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="home_svg__icon home_svg__icon-tabler home_svg__icon-tabler-home"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
  </Svg>
);
export default SvgHome;
