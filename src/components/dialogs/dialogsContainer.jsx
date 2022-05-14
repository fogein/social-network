import { connect } from "react-redux";
import { compose } from "redux";
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/reducers/dialogsReducer';
import { Dialogs } from "./dialogs";


let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {              
    updateMessageText: (newText) => {
      dispatch(updateNewMessageBodyCreator(newText));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

export const DialogsContainer =  
compose(
  connect(mapStateToProps, mapDispatchToProps),
  )(Dialogs)
