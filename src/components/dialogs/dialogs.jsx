import React from "react";
import cls from "./dialogs.module.css";
import { DialogItem } from "./dialogItem/dialogItem";
import { Message } from "./message/message";

export const Dialogs = ({dialogs,messages}) => {

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItem}>
        {dialogs.map(({ name, id }) => {
          return <DialogItem id={id} name={name} />;
        })}
      </div>
      <div className={cls.messages}>
        {messages.map(({ message }) => {
          return <Message message={message} />;
        })}
      </div>
    </div>
  );
};
