import React from "react";

export default function Loading(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  );
}
