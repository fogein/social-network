const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT'
const sendMessage = 'SEND_MESSAGE'

let initialState = {
  dialogs: [
    { id: "1", name: "Dima" },
    { id: "2", name: "Oleg" },
    { id: "3", name: "Sasha" },
    { id: "4", name: "Vlad" },
  ],
  messages: [
    { id: 1, message: "yo" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How a y" },
    { id: 4, message: "yo" },
  ],
  newMessageText: ''
}
export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateNewMessageText:
      return {
        ...state,
        newMessageText: action.body
      }
    case sendMessage:
      let body = state.newMessageText
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, { id: 5, message: body }]
      }
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
