import React from "react";
import cls from "./dialogs.module.css";
import { DialogItem } from "./dialogItem/dialogItem";
import { Message } from "./message/message";

export const Dialogs = () => {
  let dialogsData = [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Oleg'},
    {id: '3', name: 'Sasha'},
    {id: '4', name: 'Vlad'}
  ]
  let messageData = [
    {id: 1, message: 'yo'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How a y'},
    {id: 4, message: 'yo'}
  ]
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItem}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />

      </div>
      <div className={cls.messages}>
        <Message message={messageData[0].message}/>
        <Message message={messageData[1].message}/>
 
      </div>
    </div>
  );
};
