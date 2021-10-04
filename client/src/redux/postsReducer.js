import axios from 'axios';
import { postsAPI } from '../api/postsAPI';

const CREATE_POST = 'CREATE_POST',
      DELETE_POST = 'DELETE_POST',
      GET_ALL_POSTS = 'GET_ALL_POSTS',
      UPDATE_POSTS = 'UPDATE_POSTS';

const initialState = {
   posts: [],
   post: null,
   isLoading: false
}

const postsReducer = (state = initialState, action) => {
   switch (action.type) {

   case CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts] }
      
   case GET_ALL_POSTS:
      return { ...state, posts: action.posts, isLoading: false }

   case UPDATE_POSTS:
      return {
         ...state,
         posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post)
      }

   case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.postId)
      }

   default:
      return state
   }
};

const createPostSuccess = (payload) => ({ type: CREATE_POST, payload });
const removePostSuccess = (postId) => ({ type: DELETE_POST, postId });
const getAllPostsSuccess = (posts) => ({ type: GET_ALL_POSTS, posts });
const updatePosts = (payload) => ({ type: UPDATE_POSTS, payload});

export const getAllPosts = () => (dispatch) => {
   postsAPI.getAllPosts()
      .then(res => dispatch(getAllPostsSuccess(res.data)));
};

export const createPost = (post) => (dispatch) => {
   axios.post('/api/posts', post)
      .then(res => dispatch(createPostSuccess(res.data)));
};

export const removePost = (postId) => (dispatch) => {
   postsAPI.removePost(postId)
      .then(() => dispatch(removePostSuccess(postId)))
};

export const createLike = (postId) => (dispatch) => {
   postsAPI.createLike(postId)
      .then(res => dispatch(updatePosts(res.data)))
      .catch(error => console.log(error.response));
};

export const removeLike = (postId, likeId) => (dispatch) => {
   postsAPI.removeLike(postId, likeId)
      .then(res => dispatch(updatePosts(res.data)))
      .catch(error => console.log(error.response));
};

export const createComment = (postId, comment) => (dispatch) => {
   postsAPI.createComment(postId, comment)
      .then(res => dispatch(updatePosts(res.data)))
      .catch(error => console.log(error.response));
};

export const removeComment = (postId, commentId) => (dispatch) => {
   postsAPI.removeComment(postId, commentId)
      .then(res => dispatch(res.data))
      .catch(error => console.log(error.response));
};


export default postsReducer;