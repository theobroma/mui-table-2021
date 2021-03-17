export type DiscountType = 'GOLD' | 'SILVER' | 'WOOD' | 'STANDART';
export type FilterType = 'GOLD' | 'SILVER' | 'WOOD' | 'STANDART';

export type FilterItemType = {
  name: FilterType;
  active: boolean;
};

export type FilterListType = {
  data: FilterItemType[];
};

export const DiscountFilters = {
  GOLD: 'GOLD' as FilterType,
  SILVER: 'SILVER' as FilterType,
  WOOD: 'WOOD' as FilterType,
  STANDART: 'STANDART' as FilterType,
};
