import React from "react";
import HeaderNav from "./headernav";
import Footer from "./footer";
import Imgs from "./hero/imgs";
import TextPart from "./hero/textpart";
import Branding from "./hero/branding";
import CardPage from "./hero/card";

const HomePage = () => {
  return (
    <>
      <HeaderNav />
      <TextPart />
      <Imgs />
      <TextPart />
      <Branding />
      <CardPage />
      <Footer />
    </>
  );
};

export default HomePage;
