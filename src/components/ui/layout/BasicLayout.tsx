import Footer from "./Footer";
import { ReactElement } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactElement;
};

const BasicLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default BasicLayout;
