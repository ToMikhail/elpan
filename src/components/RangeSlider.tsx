import { useState } from "react";
interface IRangeSlider {
  minValue: string;
  maxValue: string;
}

export default function RangeSlider({ minValue, maxValue }: IRangeSlider) {
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);

  function handleInputMin(e: any) {
    let value = e.target.value;
    (+value < +max) ? setMin(value) : setMin("16");
  }
  function handleInputMax(e: any) {
    let value = e.target.value;
    (+value >= +min) ? setMax(value) : setMax(min);
  }

  return (
    <div className="text-white">
      <p className="block text-sm font-medium leading-6 text-blue-100">Select range nominal current, A: </p>
      <label>From: </label>
      <input
        className="text-black"
        type="number"
        name="minRangeValue"
        min={minValue}
        max={max}
        value={min}
        onChange={handleInputMin}
      ></input>
      <label>To: </label>
      <input
        className="text-black"
        type="number"
        name="maxRangeValue"
        min={min}
        max={maxValue}
        value={max}
        onChange={handleInputMax}
      />
      <p>
        {min} - {max} A
      </p>
    </div>
  );
}
