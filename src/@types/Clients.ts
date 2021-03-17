import { DiscountType } from '.';

export type GenderType = 'MALE' | 'FEMALE';

export type ClientType = {
  _id: string;
  name: string;
  discountType: DiscountType;
  spentSum: number;
  discountProcent: number;
  gender: GenderType;
};
