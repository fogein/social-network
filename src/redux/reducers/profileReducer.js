const ADDPOST = "ADD-POST";
const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: "hi its post", likesCount: 12 },
    { id: 2, message: "hi", likesCount: 32 },
    { id: 3, message: "hi it third post", likesCount: 31 },
  ],
  newPostText: ''
}
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPOST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      }
    case UPDATENEWPOSTTEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADDPOST,
  };
};
export const updateNewPostTextActionCreator = (newText) => {
  return {
    type: UPDATENEWPOSTTEXT,
    newText,
  };
};
