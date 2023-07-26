//Global
import Head from "next/head";

//Components
import LinkComponent from "./LinkComponent";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <div className="navigation">
        <Head>
          <meta keywords={("zhukovmatvey, next.js, next", keywords)}></meta>
          <title>Main page</title>
        </Head>
        <LinkComponent title={"To Main Page"} href={"/"} />
        <LinkComponent title={"To Users List"} href={"/users"} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
