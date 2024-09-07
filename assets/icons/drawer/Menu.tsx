import Svg, { Path, SvgProps } from "react-native-svg";

function Menu(props: SvgProps) {
  const { height, width, stroke } = props;
  return (
    <Svg
      stroke={stroke}
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...props}
    >
      <Path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" stroke="none" />
    </Svg>
  );
}

export default Menu;
