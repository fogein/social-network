import React from "react";
import cls from "./dialogs.module.css";
import { DialogItem } from "./dialogItem/dialogItem";
import { Message } from "./message/message";

export const Dialogs = () => {
  let dialogsData = [
    { id: "1", name: "Dima" },
    { id: "2", name: "Oleg" },
    { id: "3", name: "Sasha" },
    { id: "4", name: "Vlad" },
  ];
  let messageData = [
    { id: 1, message: "yo" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How a y" },
    { id: 4, message: "yo" },
  ];
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItem}>
        {dialogsData.map(({ name, id }) => {
          return <DialogItem id={id} name={name} />;
        })}
      </div>
      <div className={cls.messages}>
        {messageData.map(({ message }) => {
          return <Message message={message} />;
        })}
      </div>
    </div>
  );
};
