import SchemePanel from "../../components/SchemePanel";
import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";
import Search from "../../components/Search";
import { useState } from "react";

export default function MainPage() {
  const [schemaItems, setSchemaItems] = useState([]);
  const handleSchemaItems = (value: any): void => {
    setSchemaItems((items: any): any=> {
      return [...items, value]});
  }
  return (
    <>
      <Header />
      <Main>
        <SchemePanel items={schemaItems} />
        <Search searchItems={schemaItems} handleSearchItems={handleSchemaItems}/>
      </Main>
    </>
  );
}
