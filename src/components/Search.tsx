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

export default function Search() {
  const [isBreaker, setBreaker] = useState(true);
  const [polesNumber, setPolesNumber] = useState(1);
  const [modulesNumber, setModulesNumber] = useState(1);
  // const [rangeNominalCurrent, setRangeNomCurrent] = useState(undefined);
  const [selectProducts, setSelectProducts] = useState([]);

  // console.log('products: ', products);

  const handleChildData = (data: any) => {
    setBreaker(!isBreaker);
  };

  const handleNumberOfPoles = (data: any) => {
    setPolesNumber(data);
  };

  const handleNumberOfModules = (data: any) => {
    setModulesNumber(data);
  };

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
      console.log("item.productType: ", product.productType);
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
      <div className="flex gap-4 flex-wrap m-4">
        {selectProducts.map((product: any): any => {
          return (
              <div
                className="border border-slate-600 rounded"
                key={product.articleId}
              >
                <h3>{product.productType}</h3>
                <p>Количество полюсов: {product.numberOfPoles}</p>
                <p>Количество модулей: {product.numberOfModules}</p>
                <a href={product.productLink}>More info</a>
              </div>
          );
        })}
      </div>
    </>
  );
}
