import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgAdjustmentsHorizontal = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="adjustments-horizontal_svg__icon adjustments-horizontal_svg__icon-tabler adjustments-horizontal_svg__icon-tabler-adjustments-horizontal"
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
    <Path d="M12 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 6h8M16 6h4M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 12h2M10 12h10M15 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 18h11M19 18h1" />
  </Svg>
);
export default SvgAdjustmentsHorizontal;
