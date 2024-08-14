// import SchemePanel from "../../components/SchemePanel";
import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";
import Product from "../../components/Product";
import Search from "../../components/Search";

export default function MainPage() {
  return (
    <>
      <Header />
      <Main>
        {/* <SchemePanel /> */}
        <Search />
      </Main>
    </>
  );
}
