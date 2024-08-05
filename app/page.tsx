import { Title } from "@/components/ui";
import { Container, Filters, ProductCard } from "@/components/widgets";
import { TopBar } from "../components/widgets/Top-bar";

export default function Home() {
   return (
      <>
         <Container className="mt-10">
            <Title text="Все питсы" size="lg" className="font-extrabold" />
         </Container>
         <TopBar />
         <Container className="mt-10 pb-14">
            <div className="flex gap-[60px]">
               <div className="w-[250px]">
                  <Filters />
               </div>
               <div className="flex-1">
                  <div className="flex flex-col gap-16">
                     <ProductCard
                        id={1}
                        name="Диабло"
                        price={500}
                        imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif"
                     />
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
}
