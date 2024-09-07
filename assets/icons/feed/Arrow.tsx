import Svg, { Path, SvgProps } from "react-native-svg";

function Arrow(props: SvgProps) {
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
        d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 004 14h4v7a1 1 0 001 1h6a1 1 0 001-1v-7h4a1.001 1.001 0 00.781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"
        stroke="none"
      />
    </Svg>
  );
}

export default Arrow;
