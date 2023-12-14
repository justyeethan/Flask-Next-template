import React from "react";

type Text = {
  children: React.ReactNode;
};
export default function Title({ children }: Text) {
  return (
    <div className="m-5 flex place-content-center items-center justify-center columns-2 content-center">
      <h1 className="text-5xl text-center font-bold font-weight">{children}</h1>
    </div>
  );
}
