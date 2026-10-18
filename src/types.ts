export interface Treatment {
  id: string;
  title: string;
  subtitle: string;
  startingPrice: number;
  duration: string;
  downtime: string;
  image: string;
  popularAreas: string[];
  description: string;
  benefits: string[];
  details: {
    overview: string;
    targetConcerns: string[];
    procedureTime: string;
    resultsDuration: string;
    aftercare: string[];
  };
}

export interface PriceItem {
  name: string;
  specification?: string;
  price: string;
  popular?: boolean;
  category: 'anti-wrinkle' | 'fillers' | 'skin' | 'packages';
}

export interface Review {
  id: string;
  name: string;
  suburb: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  treatment: string;
  timeframe: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  details: string;
}
