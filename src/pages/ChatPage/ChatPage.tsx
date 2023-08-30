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
        isReaded={true}
        attachments={[
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU",
            filename: "avatar",
          },
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU",
            filename: "avatar",
          },
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU",
            filename: "avatar",
          },
        ]}
      />
      <Message
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU"
        text="Брат, всё отлично, как сам?"
        date="Sun Apr 21 2023 21:38:22"
        userName="Sergii"
        isMe={true}
        isReaded={true}
        attachments={[
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU",
            filename: "avatar",
          },
        ]}
      />
      <Message
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU"
        userName="Sergii"
        attachments={[
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU",
            filename: "avatar",
          },
        ]}
      />
      <Message
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU"
        userName="Sergii"
        isTyping={true}
      />
    </section>
  );
};

export default ChatPage;
