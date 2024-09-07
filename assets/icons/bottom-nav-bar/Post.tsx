import Svg, { Path, SvgProps } from "react-native-svg";

function Post(props: SvgProps) {
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
      <Path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" stroke="none" />
      <Path
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
        stroke="none"
      />
    </Svg>
  );
}

export default Post;
