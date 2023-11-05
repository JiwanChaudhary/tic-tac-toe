import React from "react";

type BlockType = {
  value?: string | null;
  onClick?: () => void;
};

const Block: React.FC<BlockType> = (props) => {
  return (
    <div
      className="cursor-pointer h-20 w-20 border bg-gray-700 border-white text-white flex justify-center items-center text-[30px]"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Block;
