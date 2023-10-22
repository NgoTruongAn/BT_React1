import React from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export const BaiTapLayoutComponent = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Body />
      </div>
      <Footer />
    </div>
  );
};
