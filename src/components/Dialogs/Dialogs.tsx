import { DialogItem } from "..";

import "./Dialogs.scss";

interface DialogsProps {
  items: {
    _id: string;
    user: {
      _id: string;
      fullname: string;
      avatar?: string | undefined | null;
    };
    lastMessage: {
      text?: string;
      isReaded?: boolean;
      created_at: string;
    };
  }[];
}

const Dialogs = ({ items }: DialogsProps) => {
  return (
    <div className="dialogs">
      {items.map((item) => (
        <DialogItem key={item._id} partner={item.user} />
      ))}
    </div>
  );
};

export default Dialogs;
