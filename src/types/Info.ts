export type ClassType = 'Class' | 'Subclass' | string;
export type OrderType = 'Infraorder' | 'Order' | 'Suborder' | string;
export type FamilyType = 'Family' | 'Subfamily' | 'Superfamily' | string;
export type TribeType = 'Subtribe' | 'Tribe' | string;
export type GenusType = 'Genus' | string;
export type SpeciesType = 'Species' | string;

export type ClassInfo = {
  classType: ClassType;
  value: string;
}[];

export type FamilyInfo = {
  familyType: FamilyType;
  value: string;
}[];

export type TribeInfo = {
  tribeType: TribeType;
  value: string;
}[];

export type OrderInfo = {
  orderType: OrderType;
  value: string;
}[];

export type GenusInfo = {
  genusType: GenusType;
  value: string;
}[];

export type SpeciesInfo = {
  speciesType: SpeciesType;
  value: string;
}[];
