import Svg, { Path, SvgProps } from "react-native-svg";

function Trending(props: SvgProps) {
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
      <Path
        d="M10 10.414l4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z"
        stroke="none"
      />
    </Svg>
  );
}

export default Trending;
