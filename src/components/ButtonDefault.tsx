import { Button } from "@headlessui/react";
import { ReactElement } from "react";

export default function ButtonDefault({ textButton}: {textButton: string} ): ReactElement {
  return (
    <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
      { textButton }
    </Button>
  );
}
