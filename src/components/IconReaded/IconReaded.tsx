import readedSvg from "@/assets/img/readed.svg";
import noReadedSvg from "@/assets/img/noreaded.svg";

interface IconReadedProps {
  isMe?: boolean;
  isReaded: boolean;
}

const IconReaded = ({ isMe, isReaded }: IconReadedProps) =>
  (isMe &&
    (isReaded ? (
      <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />
    ) : (
      <img
        className="message__icon-readed message__icon-readed--no"
        src={noReadedSvg}
        alt="No readed icon"
      />
    ))) ||
  null;

export default IconReaded;
