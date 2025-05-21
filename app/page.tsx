import { Hero, SearchBar, CustomFilter } from "@/components";

import Image from "next/image";




export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="max-w-[1440px] mx-auto mt-12 sm:px-16 px-6 py-4" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h4 className="text-4xl font-bold">Car Catalogue</h4>
          <p className="text-base font-normal">
            Explore the cars you might like
          </p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
