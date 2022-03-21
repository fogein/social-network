const ADDPOST = "ADD-POST";
const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';
export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADDPOST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost)
      state.newPostText = ''
      return state;
    case UPDATENEWPOSTTEXT:
      state.newPostText = action.newText;
      return state;
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
