import { instance } from './api';

export const UsersAPI = {
  getUsers: async () => {
    try {
      const response = await instance.get<any>(`/users`);
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
};
