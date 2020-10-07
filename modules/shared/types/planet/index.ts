export interface Planet {
  id: string;
  name: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  updatedAt: string;
  createdAt: string;
  population: number;
  climate: string[];
  orbitalPeriod: number;
  terrain: string[];
  gravity: string;
  rotationPeriod: number;
  surfaceWater: number;
  diameter: number;
}
