import classNames from "classnames";
import { Time } from "..";

import "./Message.scss";

interface MessageProps {
  avatar: string;
  text: string;
  date: string;
  userName: string;
  isMe: boolean;
}

const Message = ({ avatar, text, date, userName, isMe }: MessageProps) => {
  console.log(avatar);

  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${userName}`} className="avatar" />
      </div>
      <div className="message__content">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__date">
          <Time date={date} />
        </span>
      </div>
    </div>
  );
};

export default Message;
