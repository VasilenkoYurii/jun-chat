import formatDistanceToNow from "date-fns/formatDistanceToNow";
import enLocale from "date-fns/locale/en-US";

interface TimeProps {
  date: string;
}

const Time = ({ date }: TimeProps) => {
  const parsedDate = new Date(date);
  return (
    <>
      {formatDistanceToNow(parsedDate, { addSuffix: true, locale: enLocale })}
    </>
  );
};

export default Time;
