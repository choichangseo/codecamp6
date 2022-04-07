import BannerLayout from "./Banner/banner";
import HeaderLayout from "./Header/header";
import NavigationLayout from "./Navigation/navigation";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

interface LayOutPageProps {
  children: ReactNode;
}

const HIDDEN = ["/"];

export default function LayOutPage(props: LayOutPageProps) {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  return (
    <>
      {!isHidden && (
        <>
          <HeaderLayout />
          <BannerLayout />
          <NavigationLayout />
        </>
      )}
      <Body>{props.children}</Body>
    </>
  );
}
