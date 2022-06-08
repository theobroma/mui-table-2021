import * as z from 'zod';
// import { DiscountType } from '.';

// ===Original Types===
// export type GenderType = 'MALE' | 'FEMALE';

// export const Genders = {
//   MALE: 'MALE' as GenderType,
//   FEMALE: 'FEMALE' as GenderType,
// };

// export type ClientsItemType = {
//   id: string;
//   name: string;
//   discountType: DiscountType;
//   spentSum: number;
//   discountProcent: number;
//   gender: GenderType;
// };

// ===Schemas===

export const GendersEnum = z.enum(['MALE', 'FEMALE']);
export type GenderType = z.infer<typeof GendersEnum>;

export const ClientsItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  discountType: z.any(),
  spentSum: z.number(),
  discountProcent: z.number(),
  gender: GendersEnum,
});
export type ClientsItemType = z.infer<typeof ClientsItemSchema>;

export const ClientsResponseSchema = z.array(ClientsItemSchema);
export type ClientsResponseType = z.infer<typeof ClientsResponseSchema>;
