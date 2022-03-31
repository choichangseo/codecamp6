import BannerLayout from "./Banner/banner";
import HeaderLayout from "./Header/header";
import NavigationLayout from "./Navigation/navigation";
import { ReactNode } from "react";
import styled from "@emotion/styled";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

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
    </>
  );
}
