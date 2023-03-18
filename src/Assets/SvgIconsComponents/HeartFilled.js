import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHeartFilled = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="heart-filled_svg__icon heart-filled_svg__icon-tabler heart-filled_svg__icon-tabler-heart-filled"
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
    <Path
      d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185-.048.041-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082-7.493-7.422A6 6 0 0 1 6.979 3.074z"
      fill="currentColor"
      stroke="none"
    />
  </Svg>
);
export default SvgHeartFilled;
