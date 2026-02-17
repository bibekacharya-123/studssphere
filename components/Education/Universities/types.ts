
export interface University {
  id: string;
  name: string;
  logo: string;
  location: string;
  rating: number;
  type: string;
  rank: number;
  isPopular: boolean;
  programsCount: number;
  collegesCount: number;
  popularPrograms: string[];
}

export interface College {
  id: string;
  universityId: string;
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  affiliation: string;
  type: string;
}

export interface FilterState {
  affiliation: string[];
  searchQuery: string;
}
