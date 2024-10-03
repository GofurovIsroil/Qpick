import { Banner } from "@/components/Banner/Banner";
import { Products } from "@/components/Products/Products";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="mt-[22px]">
        <Banner />
      </div>
      <div className="mt-[44px] mb-[60.6px]">
        <Products />
      </div>
    </main>
  );
}
