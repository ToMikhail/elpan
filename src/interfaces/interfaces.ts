export interface ISearchRequest {
  productType: string,
  rangeNominalCurrent?: {
    minValue: number;
    maxValue: number;
  };
  polesNumber: number;
  modulesNumber: number;
}