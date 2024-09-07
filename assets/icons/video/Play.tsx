import Svg, { Path, SvgProps } from "react-native-svg";

function Play(props: SvgProps) {
  const { height, width, stroke } = props;
  return (
    <Svg
      stroke={stroke}
      fill={stroke}
      strokeWidth={0}
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...props}
    >
      <Path d="M7 6v12l10-6z" stroke="none" />
    </Svg>
  );
}

export default Play;
