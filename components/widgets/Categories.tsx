"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/useCategoryStore";

interface Props {
   className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
   const categoriesArray = [
      { id: 0, name: "Питсы" },
      { id: 1, name: "Комбо" },
      { id: 2, name: "Закуски" },
      { id: 3, name: "Коктейли" },
      { id: 4, name: "Кофе" },
      { id: 5, name: "Напитки" },
      { id: 6, name: "Десерты" },
   ];
   const activeCategoryIndex = useCategoryStore((state) => state.activeId);
   return (
      <div
         className={cn(
            "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
            className
         )}
      >
         {categoriesArray.map(({ name, id }) => (
            <a
               className={cn(
                  "flex items-center font-bold h-11 rounded-2xl px-5",
                  id === activeCategoryIndex &&
                     "bg-white shadow-md shadow-gray-200 text-primary"
               )}
               href={`/#${name}`}
               key={id}
            >
               <button>{name}</button>
            </a>
         ))}
      </div>
   );
};
