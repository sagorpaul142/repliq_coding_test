import React from 'react';
import TopHeader from "@/components/marketing/header/top-header";
import SubHeader from "@/components/marketing/header/sub-header";
import Navbar from "@/components/marketing/header/navbar";

const Header = () => {
  return (
    <div>
      <TopHeader/>
      <SubHeader/>
      <Navbar/>
    </div>
  );
};

export default Header;