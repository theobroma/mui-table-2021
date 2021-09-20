import { instance } from './api';

export const UsersAPI = {
  getUsers: async () => {
    try {
      const response = await instance.get<any>(`/users`);
      return response.data;
    } catch (e) {
      // https://stackoverflow.com/a/62611888/3988363
      if (e instanceof Error) {
        return e.message;
      }
      return false;
    }
  },
};
