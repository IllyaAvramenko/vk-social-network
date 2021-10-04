import * as axios from 'axios';

export const Instance = (baseURL) => {
   
   const defaultOptions = {
      baseURL: baseURL
   };

   const instance = axios.create(defaultOptions);

   const token = localStorage.getItem('token');
   console.log(token)
   
   if (token) {
      instance.defaults.headers.common['Authorization'] = token;
   } else {
      delete instance.defaults.headers.common['Authorization'];
   }

   return instance;
};