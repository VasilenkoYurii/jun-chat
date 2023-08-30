import classNames from "classnames";
import { Time, IconReaded } from "..";

import "./Message.scss";

interface MessageProps {
  avatar: string;
  text?: string;
  date?: string;
  userName: string;
  isMe?: boolean;
  isReaded?: boolean;
  attachments?: object[];
  isTyping?: boolean;
}

const Message = ({
  avatar,
  text,
  date,
  userName,
  isMe,
  isReaded,
  attachments,
  isTyping,
}: MessageProps) => {
  // const renderAttachment = (item: any) => {
  //   if (item.ext !== "webm") {
  //     return (
  //       <div
  //         key={item._id}
  //         onClick={() => setPreviewImage(item.url)}
  //         className="message__attachments-item"
  //       >
  //         <div className="message__attachments-item-overlay">
  //           <Icon type="eye" style={{ color: "white", fontSize: 18 }} />
  //         </div>

  //         <img src={item.url} alt={item.filename} />
  //       </div>
  //     );
  //   }
  // };

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--image": attachments && attachments.length === 1 && !text,
      })}
    >
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={isReaded} />
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${userName}`} className="avatar" />
        </div>

        <div className="message__info">
          {(text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
          )}

          {/* <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
          </div> */}

          {attachments && (
            <div className="message__attachments">
              {/* {attachments.map((item) => renderAttachment(item))} */}
              {attachments.map((item: any, index) => {
                return (
                  <div className="message__attachments-item" key={index}>
                    <img src={item.url} alt={item.filename} />
                  </div>
                );
              })}
            </div>
          )}

          {date && (
            <span className="message__date">
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
