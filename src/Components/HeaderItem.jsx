import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-black flex items-center gap-3 text-[20px] font-semibold cursor-pointer hover:underline underline-offset-8">
      <Icon />
      <h1>{name}</h1>
    </div>
  );
}

export default HeaderItem;
