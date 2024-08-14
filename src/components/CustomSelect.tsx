export default function CustomSelect({ sendDataToParent, data, type }: any) {
  const handleChange = (e: any) => {
    sendDataToParent(e.target.value)
  };
  return (
    <>
      <label
        className="block text-sm font-medium leading-6 text-blue-100"
      >
        {type}
      </label>
      <select
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:max-w-xs sm:text-sm sm:leading-6"
        name={type}
        id={type}
        onChange={handleChange}
      >
        {data.map((item: any) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}
