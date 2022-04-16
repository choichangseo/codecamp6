import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import "antd/dist/antd.css";

const firebaseConfig = {
  apiKey: "AIzaSyCwzIL96DUQbgVnD1Hrd_0b9Kxr9_UJNO8",
  authDomain: "backend9445.firebaseapp.com",
  projectId: "backend9445",
  storageBucket: "backend9445.appspot.com",
  messagingSenderId: "1011555807499",
  appId: "1:1011555807499:web:7304f420678ce60e8c320e",
  measurementId: "G-YSWJDE3E8D",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
