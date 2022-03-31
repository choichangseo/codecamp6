import BannerLayout from "./Banner/banner";
import HeaderLayout from "./Header/header";
import NavigationLayout from "./Navigation/navigation";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import FooterLayOut from "./Footer/footer";

const Body = styled.div``;

interface LayOutPageProps {
  children: ReactNode;
}

export default function LayOutPage(props: LayOutPageProps) {
  return (
    <>
      <HeaderLayout />
      <BannerLayout />
      <NavigationLayout />
      <Body>{props.children}</Body>
      <FooterLayOut></FooterLayOut>
    </>
  );
}
