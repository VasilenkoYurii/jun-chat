import { Message } from "../../components";

import "./ChatPage.scss";

const ChatPage = () => {
  return (
    <section className="chat-page">
      <Message
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU"
        text="Привет бандит, как дела?"
        date="Sun Apr 21 2023 21:30:22"
        userName="Yurii"
        isMe={false}
      />
      <Message
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU"
        text="Брат, всё отлично, как сам?"
        date="Sun Apr 21 2023 21:38:22"
        userName="Sergii"
        isMe={true}
      />
    </section>
  );
};

export default ChatPage;
