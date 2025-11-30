type Info = {
  value: string;
};

export type ClassType = 'Class' | 'Subclass';
export type OrderType = 'Infraorder' | 'Order' | 'Suborder';
export type FamilyType = 'Family' | 'Subfamily' | 'Superfamily';
export type TribeType = 'Subtribe' | 'Tribe';
export type GenusType = 'Genus';
export type SpeciesType = 'Species';

export type ClassInfo = {
  classType: ClassType;
} & Info;

export type FamilyInfo = {
  familyType: FamilyType;
} & Info;

export type TribeInfo = {
  tribeType: TribeType;
} & Info;

export type OrderInfo = {
  orderType: OrderType;
} & Info;

export type GenusInfo = {
  genusType: GenusType;
} & Info;

export type SpeciesInfo = {
  speciesType: SpeciesType;
} & Info;
