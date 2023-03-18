import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgShoppingBag = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="shopping-bag_svg__icon shopping-bag_svg__icon-tabler shopping-bag_svg__icon-tabler-shopping-bag"
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
    <Path d="M6.331 8H17.67a2 2 0 0 1 1.977 2.304l-1.255 8.152A3 3 0 0 1 15.426 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8z" />
    <Path d="M9 11V6a3 3 0 0 1 6 0v5" />
  </Svg>
);
export default SvgShoppingBag;
