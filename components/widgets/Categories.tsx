import { cn } from "@/lib/utils";
import React from "react";

interface Props {
   className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
   const categoriesArray = [
      "Пиццы",
      "Комбо",
      "Закуски",
      "Коктейли",
      "Кофе",
      "Напитки",
      "Десерты",
   ];
   const activeCategoryIndex = 0;
   return (
      <div
         className={cn(
            "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
            className
         )}
      >
         {categoriesArray.map((category, index) => (
            <a
               className={cn(
                  "flex items-center font-bold h-11 rounded-2xl px-5",
                  index === activeCategoryIndex &&
                     "bg-white shadow-md shadow-gray-200 text-primary"
               )}
               key={index}
            >
               <button>{category}</button>
            </a>
         ))}
      </div>
   );
};
