import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { Time, IconReaded } from "..";
import convertCurrentTime from "@/utils/helpers/convertCurrentTime";
import isAudio from "@/utils/helpers/isAudio";

import waveSvg from "@/assets/img/wave.svg";
import playSvg from "@/assets/img/play.svg";
import pauseSvg from "@/assets/img/pause.svg";

import "./Message.scss";

const MessageAudio = ({ audioSrc }: any) => {
  const audioElem = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (audioElem.current) {
      if (!isPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }
  };

  useEffect(() => {
    if (audioElem.current) {
      audioElem.current.volume = 0.01; // Установите числовое значение
      audioElem.current.addEventListener(
        "playing",
        () => {
          setIsPlaying(true);
        },
        false
      );
      audioElem.current.addEventListener(
        "ended",
        () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        },
        false
      );
      audioElem.current.addEventListener(
        "pause",
        () => {
          setIsPlaying(false);
        },
        false
      );
      audioElem.current.addEventListener("timeupdate", () => {
        const duration = audioElem.current?.duration || 0;
        setCurrentTime(audioElem.current?.currentTime || 0);
        setProgress(((audioElem.current?.currentTime || 0) / duration) * 100);
      });
    }
  }, []);

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload="auto" />
      <div
        className="message__audio-progress"
        style={{ width: progress + "%" }}
      />
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlaying ? (
              <img src={pauseSvg} alt="Pause svg" />
            ) : (
              <img src={playSvg} alt="Play svg" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Wave svg" />
        </div>
        <span className="message__audio-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

interface MessageProps {
  avatar: string;
  text?: string;
  date?: string;
  userName: string;
  isMe?: boolean;
  isReaded?: boolean;
  attachments?: object[];
  isTyping?: boolean;
  audio?: string;
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
  audio,
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
        "message--is-audio": audio,
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

          {audio && <MessageAudio audioSrc={audio} />}
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
