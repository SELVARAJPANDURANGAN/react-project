import { useState } from "react";
import { ColorBox } from "./ColorBox";

// function ColorBox (color) {
// const styles = {
//   backgroundColor:color,
//   height:"30px",
//   width:"300px",
// };
//     return(
//       <div style = {styles}></div>)
//     }
export function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("plum");
  // const colorList=["blue","red","green"];
  const [colorList, setColorList] = useState(["blue", "red", "green"]);
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
        <input type="text" onChange={(event) => setColor(event.target.value)} value={color} style={styles} />
        <button onClick={() => setColorList([...colorList, color])}>AddColor</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* // <ColorBox color = {colorList[2]}/> */}

    </div>
  );
}
