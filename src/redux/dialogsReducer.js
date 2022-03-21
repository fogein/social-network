const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT'
const sendMessage = 'SEND_MESSAGE'
export const dialogsReducer = (state, action) => {

  switch (action.type) {
    case updateNewMessageText:
      state.newMessageText = action.body;
      return state;
    case sendMessage:
      let body = state.newMessageText
      state.newMessageText = ''
      state.messages.push({ id: 4, message: body })
      return state;
    default:
      return state;
  }
}


export const sendMessageCreator = () => {
  return {
    type: sendMessage,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: updateNewMessageText,
    body: body,
  };
};
