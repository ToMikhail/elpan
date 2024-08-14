import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function DropDownSearch({ data, sendDataToParent }: any) {
  const [selected, setSelected] = useState(data[0]);
  useEffect(() => {
    handleClick();
  }, [selected]);

  function handleClick(): any {
    sendDataToParent(selected);
  }

  return (
    <div className="mx-auto w-52 pt-8">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          {selected.name}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className={clsx(
            "w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 "
          )}
        >
          {data.map((item: any) => (
            <ListboxOption
              onClick={(e) => {
                setSelected(item);
                handleClick();
              }}
              key={item.id}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{item.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
