import * as axios from 'axios';
import { Instance } from './instance';

const instance = Instance('/api/posts/');

// const instanse = axios.create({
//    baseURL: '/api/posts/',
// }); 

export const postsAPI = {
   getAllPosts() {
      return instance.get();
   },

   removePost(postId) {
      return instance.delete(`${postId}`);
   },

   createLike(postId) {
      return instance.post(`${postId}/likes`);
   },

   removeLike(postId, likeId) {
      return instance.delete(`${postId}/likes/${likeId}`);
   },

   createComment(postId, comment) {
      return instance.post(`${postId}/comments`, comment);
   },

   removeComment(postId, commentId) {
      return instance.delete(`${postId}/comments/${commentId}`);
   },
};