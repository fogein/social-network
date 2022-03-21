import React from "react";
import cls from "./dialogs.module.css";
import { DialogItem } from "./dialogItem/dialogItem";
import { Message } from "./message/message";
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogsReducer';

export const Dialogs = (props) => {

  const changeText = (e) => {
    let newText = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(newText));
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    props.dispatch(sendMessageCreator());
  };

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItem}>
        {props.dialogsPage.dialogs.map(({ name, id }) => {
          return <DialogItem id={id} name={name} />;
        })}
      </div>
      <div className={cls.messages}>
        {props.dialogsPage.messages.map(({ message }) => {
          return <Message message={message} />;
        })}
        <div>
          <form className={cls.form}>
            <input
              onChange={changeText}
              className={cls.input}
              value={props.dialogsPage.newMessageText}
              type="text"
            />
            <button onClick={onSendMessage}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
