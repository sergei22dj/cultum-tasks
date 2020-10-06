export interface Starship {
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  id: string;
  costInCredits: number;
  hyperdriveRating: number;
  passengers: number;
  cargoCapacity: number;
  name: string;
  crew: number;
  length: number;
  manufacturer: string[];
  maxAtmospheringSpeed: number;
  mglt: number;
  consumables: string;
  class: string;
}
