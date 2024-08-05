"use client";

import { FilterCheckbox, FilterCheckboxProps } from "../ui/filter-checkbox";
import { Button, Input } from "../ui";
import { useState } from "react";

type Item = FilterCheckboxProps;

interface Props {
   title: string;
   items: Item[];
   defaultItems: Item[];
   limit?: number;
   searchInputPlaceholder?: string;
   onChange?: (values: string[]) => void;
   defaultValues?: string[];
   className?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
   title,
   items,
   defaultItems,
   limit = 6,
   searchInputPlaceholder = "Поиск...",
   onChange,
   defaultValues,
   className,
}) => {
   const [showAll, setShowAll] = useState<Boolean>(false);
   const [searchValue, setSearchValue] = useState<string | undefined>("");
   const listOfItemsToRender = showAll
      ? items.filter((item) =>
           item.text.toLowerCase().includes(searchValue!.toLowerCase())
        )
      : defaultItems.slice(0, limit);

   const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
   };

   return (
      <div className={className}>
         <p className="font-bold mb-3 mt-12">{title}</p>

         {showAll && (
            <div className="mb-5">
               <Input
                  onChange={onChangeSearchInput}
                  placeholder={searchInputPlaceholder}
                  className="bg-gray-50 border-none"
               />
            </div>
         )}

         <div className="flex flex-col gap-4 max-h-96 overflow-hidden scrollbar">
            {listOfItemsToRender.map((item, index) => (
               <FilterCheckbox
                  key={index}
                  // onCheckedChange={() => onCheckedChange(item.value)}
                  onCheckedChange={(ids) => console.log(ids)}
                  // checked={selected.has(item.value)}
                  checked={false}
                  text={item.text}
                  value={item.value}
                  endAdornment={item.endAdornment}
               />
            ))}
         </div>

         {items.length > limit && (
            <div
               className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}
            >
               <Button
                  variant={"secondary"}
                  className="text-primary mt-3 bg-white"
                  onClick={() => setShowAll(!showAll)}
               >
                  {showAll ? "Скрыть" : "+ Показать все"}
               </Button>
            </div>
         )}
      </div>
   );
};
