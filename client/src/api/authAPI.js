import * as axios from 'axios';

const instance = axios.create({
   baseURL: '/api/auth/',
}); 


export const authAPI = {
   register(userData) {
      return instance.post(`register`, userData);
   },

   login(userData) {
      return instance.post(`login`, userData);
   },
};