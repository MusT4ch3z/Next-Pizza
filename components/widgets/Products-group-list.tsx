"use client";

import React, { useEffect, useRef } from "react";
import { Title } from "../ui";
import { cn } from "@/lib/utils";
import { ProductCard } from ".";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/useCategoryStore";

interface Props {
   title: string;
   items: any[];
   listClassname?: string;
   categoryId: number;
   className?: string;
}
export const ProductsGroupList: React.FC<Props> = ({
   title,
   items,
   listClassname,
   className,
   categoryId,
}) => {
   const intersectionRef = useRef(null);
   const intersection = useIntersection(intersectionRef, {
      threshold: 0.6,
   });
   const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

   useEffect(() => {
      if (intersection?.isIntersecting) {
         setActiveCategoryId(categoryId);
      }
   }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

   return (
      <div className={className} id={title} ref={intersectionRef}>
         <Title text={title} size="lg" className="font-extrabold mb-5" />
         <div className={cn("grid grid-cols-3 gap-[50px]", listClassname)}>
            {items.map((product) => (
               <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.items[0].price}
               />
            ))}
         </div>
      </div>
   );
};
