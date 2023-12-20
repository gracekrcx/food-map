import DemoSlider from "./_components/DemoSlider";
import dataSlider from "./_data/slider-data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex mt-4 min-h-screen flex-col items-center justify-between">
      <div>-&nbsp;發球&nbsp;-</div>
      <Image src="/doubles-serve.jpg" width={300} height={30} alt="" />
      <div>-&nbsp;發球後&nbsp;-</div>
      <Image src="/doubles-after-serve.jpg" width={300} height={30} alt="" />
      <DemoSlider data={dataSlider} />
    </main>
  );
}
