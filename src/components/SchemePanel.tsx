export default function SchemePanel({ items }: any) {
  console.log("items schema: ", items);

  return (
    <div className="container mx-auto max-w-7xl h-80 shadow-inner rounded-md border-gray-400 bg-gray-300 py-6 sm:px-6 lg:px-8">
      <div>
        {items.map((item: any): any => {
          const element= JSON.parse(item);
          console.log('item: ', element);
          return (
            <div className="w-10 h-10" key={element.articleId}>

              <span>{element.sign}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
