// https://stackoverflow.com/a/62611888/3988363
import { instance } from './api';

export const UsersAPI = {
  getUsers: async () => {
    try {
      const response = await instance.get<any>(`/users`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return e.message;
      }
      return false;
    }
  },
  updateSpentSum: async (userId: string, spentSum: number) => {
    try {
      const response = await instance.patch<any>(`users/${userId}`, {
        spentSum,
      });
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return e.message;
      }
      return false;
    }
  },
};
