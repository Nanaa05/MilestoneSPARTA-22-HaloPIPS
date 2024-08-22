import React from "react";
interface Props {
  children: React.ReactNode;
  color: string;
}

const Card = ({ children, color }: Props) => {
  return (
    <div className={"card w-fit shadow-xl bg-HMIF-" + color}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
