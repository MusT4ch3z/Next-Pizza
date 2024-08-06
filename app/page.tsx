import { Title } from "@/components/ui";
import {
   Container,
   Filters,
   ProductCard,
   ProductsGroupList,
} from "@/components/widgets";
import { TopBar } from "../components/widgets/Top-bar";

export default function Home() {
   return (
      <>
         <Container className="mt-5">
            <Title text="Все питсы" size="lg" className="font-extrabold" />
         </Container>
         <TopBar />
         <Container className="mt-10 pb-14">
            <div className="flex gap-20">
               <div className="w-[250px]">
                  <Filters />
               </div>
               <div className="flex-1">
                  <div className="flex flex-col gap-16">
                     <ProductsGroupList
                        title="Питсы"
                        items={[
                           {
                              id: 1,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                           {
                              id: 2,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                           {
                              id: 3,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                           {
                              id: 4,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                           {
                              id: 5,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                        ]}
                        categoryId={0}
                     />

                     <ProductsGroupList
                        title="Комбо"
                        items={[
                           {
                              id: 1,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                           {
                              id: 2,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                           {
                              id: 3,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                           {
                              id: 4,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                           {
                              id: 5,
                              name: "Диабло",
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                              items: [{ price: 550 }],
                           },
                        ]}
                        categoryId={1}
                     />
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
}
