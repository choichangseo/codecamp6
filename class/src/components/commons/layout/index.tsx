import LayoutHeader from "./header/index";
import LayoutBanner from "./banner/index";
import LayoutNavigation from "./navigation/index";
import LayoutFooter from "./footer/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  background-color: salmon;
  height: 500px;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LayoutSidebar = styled.div`
  width: 250px;
  height: 500px;
  background-color: aqua;
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/12-01-modal-alert"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHidden = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner></LayoutBanner>
      <LayoutNavigation></LayoutNavigation>
      <BodyWrapper>
        <LayoutSidebar>사이드바</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
