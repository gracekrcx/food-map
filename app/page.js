import DemoSlider from "./_components/DemoSlider";
import dataSlider from "./_data/slider-data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mb-2 w-full h-6 bg-gray-300 text-center">雙打</div>
      <div>-&nbsp;發球&nbsp;-</div>
      <Image src="/doubles-serve.jpg" width={300} height={30} alt="" />
      <div>-&nbsp;發球後&nbsp;-</div>
      <Image src="/doubles-after-serve.jpg" width={300} height={30} alt="" />
      <DemoSlider data={dataSlider} />
    </main>
  );
}
