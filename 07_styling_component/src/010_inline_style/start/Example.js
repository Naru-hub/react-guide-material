import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    width: 120,
    height: 60,
    display: "block",
    fontWeight: "bold",
    "border-radius": 9999,
    cursor: "pointer",
    border: "none",
    margin: "auto",
    background: isSelected ? "pink" : "",
    // ::before, ::after, :hover, :activeなど擬似要素や擬似セレクタはインラインスタイル記法では使えない
    // @media (min-width: 600px) {} などのメディアクエリも使えない
  };

  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <button style={style}>ボタン2</button>
      <div style={{textAlign: "center"}}>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
