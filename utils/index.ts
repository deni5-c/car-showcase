import { CarProps, FilterProps } from "@/types";

export async function fetchCarData(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
    
    const headers = {
        'x-rapidapi-key': '4c6b1d66f0msh456627cdb49abcap10bf82jsna507a3ae9e20',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (displacement: number, year: number) => {
  const basePricePerDay = 50;
  const displacementFactor = 1.2; 
  const ageFactor = 0.05; 

  const mileageRate = displacement * displacementFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageURL = (car: CarProps, angle?: string) => {
    //key...

    const url = new URL('https://cdn.imagin.studio/getimage')

    const { make, year, model } = car;
    
    url.searchParams.append('customer' , 'hrjavascript-mastery')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(" ")[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
