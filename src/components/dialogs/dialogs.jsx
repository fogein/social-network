import React from "react";
import cls from "./dialogs.module.css";
import { DialogItem } from "./dialogItem/dialogItem";
import { Message } from "./message/message";
import { useForm } from "react-hook-form";

export const Dialogs = (props) => {

  // const changeText = (e) => {
  //   let newText = e.target.value;
  //   props.updateMessageText(newText)
  // };

  // const onSendMessage = (e) => {
  //   e.preventDefault();
  //   props.sendMessage()
  // };
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItem}>
        {props.dialogs.map(({ name, id }) => {
          return <DialogItem key={id} id={id} name={name} />;
        })}
      </div>
      <div className={cls.messages}>
        {props.messages.map(({ message, id }) => {
          return <Message key={id} message={message} />;
        })}
        <div>
          <DialogsInput sendMessage={props.sendMessage}/>
        </div>
      </div>
    </div>
  );
};

const DialogsInput = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    props.sendMessage(data.message)
  }
  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={cls.inpur} type="text" placeholder='Enter your message'{...register("message")} />
      <button>Send</button>
    </form>

  )
}
