import Svg, { Path, SvgProps } from "react-native-svg";

function Meatballs(props: SvgProps) {
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
      <Path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        stroke="none"
      />
    </Svg>
  );
}

export default Meatballs;
