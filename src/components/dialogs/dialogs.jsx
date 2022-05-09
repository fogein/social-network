import React from "react";
import cls from "./dialogs.module.css";
import { DialogItem } from "./dialogItem/dialogItem";
import { Message } from "./message/message";

export const Dialogs = (props) => {

  const changeText = (e) => {
    let newText = e.target.value;
    props.updateMessageText(newText)
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    props.sendMessage()
  };
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItem}>
        {props.dialogs.map(({ name, id }) => {
          return <DialogItem key={id} id={id} name={name} />;
        })}
      </div>
      <div className={cls.messages}>
        {props.messages.map(({ message,id }) => {
          return <Message key={id} message={message} />;
        })}
        <div>
          <form className={cls.form}>
            <input
              onChange={changeText}
              className={cls.input}
              value={props.newMessageText}
              type="text"
            />
            <button onClick={onSendMessage}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
