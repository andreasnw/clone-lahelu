import Svg, { Path, SvgProps } from "react-native-svg";

function Comment(props: SvgProps) {
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
      <Path d="M7 7h10v2H7zm0 4h7v2H7z" stroke="none" />
      <Path
        d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
        stroke="none"
      />
    </Svg>
  );
}

export default Comment;
