import type { ClassInfo, FamilyInfo, GenusInfo, OrderInfo, SpeciesInfo, TribeInfo } from '@/types/Info';

export function sortInfo<T extends ClassInfo | FamilyInfo | TribeInfo | OrderInfo | GenusInfo | SpeciesInfo>(
  infoArray: T[],
  sortOrder: string[],
  typeField: keyof T,
): T[] {
  return infoArray.sort((a, b) => {
    const aType = a[typeField] as string;
    const bType = b[typeField] as string;
    return sortOrder.indexOf(aType) - sortOrder.indexOf(bType);
  });
}

export function getClassSorter(): string[] {
  return ['Superclass', 'Class', 'Subclass', 'Infraclass', 'Subterclass', 'Parvclass'];
}

export function getOrderSorter(): string[] {
  return ['Magnorder', 'Superorder', 'Grandorder', 'Mirorder', 'Order', 'Suborder', 'Infraorder', 'Parvorder'];
}

export function getFamilySorter(): string[] {
  return ['Family', 'Subfamily'];
}

export function getTribeSorter(): string[] {
  return ['Tribe', 'Subtribe'];
}
