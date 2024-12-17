import React from "react";

function Title(props) {
  console.log(props)
  return (
    <div className="hero">
      <h1>
        Salom men sizni 😒🍚🍌🚑 kutyapman sizni borib olib kelaymi keling
        iltimos ish qilishimiz kerak akk.n
      </h1>
      <h1>{props.title}</h1>
      <h2>{props.font}</h2>
      <h1>{props.Line}</h1>
      <h2>{props.Huros}</h2>
      <h1>{props.name}</h1>
      <h2>{props.uda}</h2>
    </div>
  );
}

export default Title;
