import React from "react";
import Message from "./Message";

const Messages = ({ messages }) => {
  let messagesList = messages.map(message => (
    <Message key={message._id} message={message.message} />
  ));

  return <div>{messagesList}</div>;
};

export default Messages;
