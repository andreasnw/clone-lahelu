import Loading from "@/components/common/Loading";

type FooterProps = {
  isLoading: boolean;
};

const Footer = ({ isLoading }: FooterProps) => {
  if (!isLoading) return null;
  return <Loading />;
};

export default Footer;
