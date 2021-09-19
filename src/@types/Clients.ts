import { DiscountType } from '.';

export type GenderType = 'MALE' | 'FEMALE';

export const Genders = {
  MALE: 'MALE' as GenderType,
  FEMALE: 'FEMALE' as GenderType,
};

export type ClientsItemType = {
  _id: string;
  name: string;
  discountType: DiscountType;
  spentSum: number;
  discountProcent: number;
  gender: GenderType;
};
