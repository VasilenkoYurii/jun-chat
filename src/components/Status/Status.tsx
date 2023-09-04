import classNames from "classnames";

import { Button, Popover } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import "./Status.scss";

interface StatusProps {
  online?: any;
  fullname?: any;
}

const Status = ({ online, fullname }: StatusProps) => (
  <div className="chat__dialog-header">
    <div className="chat__dialog-header-center">
      <b className="chat__dialog-header-username">{fullname}</b>
      <div className="chat__dialog-header-status">
        <span className={classNames("status", { "status--online": online })}>
          {online ? "online" : "offline"}
        </span>
      </div>
    </div>
    <Popover
      className="chat__dialog-header-action"
      content={
        <div>
          <Button>Delete dialog</Button>
        </div>
      }
      trigger="click"
    >
      <div>
        <Button type="link">
          <EllipsisOutlined style={{ fontSize: "20px" }} />
        </Button>
      </div>
    </Popover>
  </div>
);

export default Status;
