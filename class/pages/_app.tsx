import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";

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
  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ApolloProvider>
  );
}

export default MyApp;
