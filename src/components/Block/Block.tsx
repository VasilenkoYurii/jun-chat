import classNames from "classnames";

import "./Block.scss";

interface BlockProps {
  children: any;
  className?: string;
}

const Block = ({ children, className }: BlockProps) => (
  <div className={classNames("block", className)}>{children}</div>
);

export default Block;
