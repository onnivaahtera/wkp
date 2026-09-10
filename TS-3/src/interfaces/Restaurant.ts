export interface Restaurant {
  location: {
    point: string,
    coordinates: [number, number]
  }
  _id: string;
  companyId: number;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  company: string;
}

export type Restaurants = Array<Restaurant>
