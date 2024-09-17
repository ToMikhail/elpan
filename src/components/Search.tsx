import { Button } from "@headlessui/react";
import { useState } from "react";
import CustomSelect from "./CustomSelect";
import RangeSlider from "./RangeSlider";
import { ProductType, numberOfModulesType } from "../interfaces/types";
import { ISearchRequest } from "../interfaces/interfaces";
import products from "../mockData/products.json";

const numberOfModules: numberOfModulesType[] = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
  {
    id: 3,
    name: "3",
  },
  {
    id: 4,
    name: "4",
  },
];

const productTypes: ProductType[] = [
  { id: 1, name: "модульный выключатель" },
  { id: 2, name: "аксессуар" },
];

export default function Search({searchItems, handleSearchItems}: any) {
  console.log('handleSearchItems: ', typeof handleSearchItems);
  console.log('searchItems: ', searchItems);
  const [isBreaker, setBreaker] = useState(true);
  const [polesNumber, setPolesNumber] = useState(1);
  const [modulesNumber, setModulesNumber] = useState(1);
  const [selectProducts, setSelectProducts] = useState([]);

  const handleChildData = (data: any) => {
    setBreaker(!isBreaker);
  };

  const handleNumberOfPoles = (data: any) => {
    setPolesNumber(data);
  };

  const handleNumberOfModules = (data: any) => {
    setModulesNumber(data);
  };

  function addItem(event: any): any {
    handleSearchItems(event.target.value);
  }

  const search = (event: any) => {
    event.preventDefault();
    const searchRequest: ISearchRequest = {
      productType: event.target.productType.value,
      rangeNominalCurrent:
        event.target.productType.value === "аксессуар"
          ? undefined
          : {
              minValue: event.target.minRangeValue.value,
              maxValue: event.target.maxRangeValue.value,
            },
      polesNumber,
      modulesNumber,
    };

    const items: any = products.filter((product: any) => {
      // console.log("item.productType: ", product.productType);
      return product.productType === searchRequest.productType;
    });
    setSelectProducts(items);
    console.log("selectProducts: ", selectProducts);
  };

  return (
    <>
      <form
        className="bg-slate-600 max-w-screen-xl p-10 flex flex-col"
        onSubmit={search}
      >
        <CustomSelect
          sendDataToParent={handleChildData}
          type="productType"
          data={productTypes}
        ></CustomSelect>
        {isBreaker && <RangeSlider minValue="16" maxValue="125"></RangeSlider>}
        <CustomSelect
          type="numberOfPoles"
          data={numberOfModules}
          sendDataToParent={handleNumberOfPoles}
        ></CustomSelect>
        <CustomSelect
          sendDataToParent={handleNumberOfModules}
          type="numberOfModules"
          data={numberOfModules}
        ></CustomSelect>

        <Button
          type="submit"
          className="max-w-fit mt-2 inline-flex items-center rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          Search
        </Button>
      </form>
      <div className="flex gap-4 flex-wrap m-4 ">
        {selectProducts.map((product: any): any => {
          return (
            <div
              className="w-1/4 border p-4 border-slate-600 rounded"
              key={product.articleId}
            >
              <h3>{product.name}</h3>
              <p>Арт.: {product.articleId}</p>
              <p>Количество полюсов: {product.numberOfPoles}</p>
              <p>Количество модулей: {product.numberOfModules}</p>
              <p className="mb-2">Tok: {product.ratedCurrent}</p>
              <p className="mb-2">{product.sign}</p>
              <a className="text-red-200" href={product.productLink}>More info</a>
              <button
                className="block p-2 bg-sky-500/100 hover:bg-sky-700 hover:transition-all  rounded-md"
                type="button"
                value={JSON.stringify(product)}
              onClick={addItem}>
                Add to Scheme
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
