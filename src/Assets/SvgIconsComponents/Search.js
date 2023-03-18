import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="search_svg__icon search_svg__icon-tabler search_svg__icon-tabler-search"
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
    <Path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" />
  </Svg>
);
export default SvgSearch;
