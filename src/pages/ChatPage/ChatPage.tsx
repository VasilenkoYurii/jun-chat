import { Message } from "../../components";
import { Dialogs } from "@/components";

import "./ChatPage.scss";

const ChatPage = () => {
  return (
    <section className="chat-page">
      {/* <Dialogs
        items={[
          {
            _id: '11111165876WHghawd5678',
            user: {
              _id: '11111165876WHghawd5678',
              fullname: "Ivan",
              avatar: null,
            },
            lastMessage: {
              text: "aadawdawd awdw aw!",
              isReaded: false,
              created_at: "Sun Apr 21 2023 21:30:22",
            },
          },
        ]}
      /> */}

      <Message
        date="Sun Apr 21 2023 21:30:22"
        userName="Yurii"
        audio={
          "https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3"
        }
        user={{
          _id: "11111165876WHghawd5678",
          fullname: "Ivan",
          avatar: null,
          // avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU",
        }}
        // isMe={true}
      />
      {/* <Message
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJsoKegnLjWMaIgHM7Iz8INBrksShqUGLbQ&usqp=CAU"
        date="Sun Apr 21 2023 21:30:22"
        userName="Yurii" 
        audio={
          "https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3"
        }
        isMe={true}
      /> */}
      {/* <Message
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
      /> */}
    </section>
  );
};

export default ChatPage;
