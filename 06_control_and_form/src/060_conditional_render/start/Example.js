import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            return (
              <li key={animal}>
                {
                  // if (animal === "Dog") {
                  //   return <li key={animal}>{animal}★</li>;
                  // } else {
                  //   return <li key={animal}>{animal}</li>;
                  // }
                  // 3項演算子
                  // animal + (animal === "Dog"
                  //   ? "★"
                  //   : "")
                  // }</li>;
                  animal ?? "null,undefinedでした"
                }
                {animal === "Dog" && "★"}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
