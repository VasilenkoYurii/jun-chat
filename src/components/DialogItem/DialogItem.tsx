import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

import { Avatar, IconReaded } from "..";

const getMessageTime = (createdAt: number) => {
  if (isToday(createdAt)) {
    return format(createdAt, "HH:mm");
  } else {
    return format(createdAt, "DD.MM.YYYY");
  }
};

const renderLastMessage = (message: any, userId: string) => {
  let text = "";
  if (!message.text && message.attachments.length) {
    text = "прикрепленный файл";
  } else {
    text = message.text;
  }

  return `${message.user._id === userId ? "Вы: " : ""}${text}`;
};

const DialogItem = ({
  _id,
  undread,
  created_at,
  text,
  isMe,
  currentDialogId,
  partner,
  lastMessage,
  userId,
}: any) => {
  return (
    <div
      className={classNames("dialogs__item", {
        // "dialogs__item--online": partner.isOnline,
        // "dialogs__item--selected": currentDialogId === _id,
      })}
    >
      <div className="dialogs__item-avatar">
        {partner && <Avatar user={partner} />}
      </div>

      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>Petro Friman</b>
          <span>{getMessageTime(Date.now())}</span>
        </div>

        <div className="dialogs__item-info-bottom">
          <p>«Никогда не ошибается тот, кто ничего не делает»</p>
          {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.readed} />}
          {/* {lastMessage.undread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.undread > 9 ? "+9" : lastMessage.undread}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
