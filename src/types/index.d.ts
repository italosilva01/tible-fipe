export type Brand = {
  label: string;
  id: string;
};

export type Model = Brand;
export type Year = Brand;

export type InputsForm = {
  brand: string;
  model: string;
  year: string;
};

export type Car = {
  yearCar: number;
  brandCar: string;
  modelCar: string;
  priceCar: string;
};
export type stateType = {
  brands: Brand[];
  car: Car;
};
