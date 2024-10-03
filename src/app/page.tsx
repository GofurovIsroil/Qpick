import { Banner } from "@/components/Banner/Banner";
import { ProductCards } from "@/components/ProductCards/ProductCards";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="mt-[22px]">
        <Banner />
      </div>
      <div className="mt-[44px] mb-[60.6px]">
        <ProductCards />
      </div>
    </main>
  );
}
