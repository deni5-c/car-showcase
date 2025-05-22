import Image from "next/image";

import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fetchCarData } from "@/utils";


export default async function Home( {searchParams}) {
  const allCars = await fetchCarData({
    manufacturer: searchParams.manufacturer ||'' ,
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        { !isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              { allCars?.map((car) => <CarCard car={car}/> )}
            </div>
          </section>
        ): (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}
