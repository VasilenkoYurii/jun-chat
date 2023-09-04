import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { Message, Status } from "../../components";
import { Dialogs } from "@/components";

import "./ChatPage.scss";

const ChatPage = () => {
  return (
    <section className="chat-page">
      <div className="chat">
        <div className="chat__sidebar">
          <div>
            <TeamOutlined />
            <span>Список диалогов</span>
          </div>
          <FormOutlined />

          <div className="chat__sidebar-search">
            <Input.Search
              placeholder="Search to message"
              onSearch={(value) => console.log(value)}
            />
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs
              items={[
                {
                  _id: "nawkdh567uhb3782hubn",
                  user: {
                    _id: "nawkdh567uhb3782hubn",
                    fullname: "Ivan",
                    avatar: null,
                  },
                  lastMessage: {
                    text: "aadawdawd awdw aw!",
                    isReaded: false,
                    created_at: "Sun Apr 21 2023 21:30:22",
                  },
                },
                {
                  _id: "333333awdawd33",
                  user: {
                    _id: "awd768iuhjbfrf6t6yu",
                    fullname: "Lora",
                    avatar: null,
                  },
                  lastMessage: {
                    text: "aadawdawd awdw aw!",
                    isReaded: false,
                    created_at: "Sun Apr 21 2023 21:30:22",
                  },
                },
              ]}
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Gena Bukin</b>
              <div className="chat__dialog-header-status">
                <Status />
              </div>
            </div>
          </div>

          <div className="chat__dialog-messages">
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
          </div>
        </div>
      </div>

      {/*  */}
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
