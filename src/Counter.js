import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { UpdateDisabled } from "@mui/icons-material";

export function Counter() {
  // let like=10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  useEffect(() => {
console.log("dislike is Update", dislike)
},[dislike]);

  return (
    <div>
      <IconButton  aria-label="like-btn" color= "primary" onClick={() => {
        setLike(like + 1);
      }}> 
      <Badge badgeContent={like} color="primary"> 👍</Badge></IconButton>  
     
    
      {/* <button onClick={() => {
        setLike(like + 1);
      }}>like{like}</button> */}
      {/* <p>{like}</p> */}
      <IconButton aria-label="dislike-btn" color= "error" onClick={() => {
        setDislike(dislike + 1);
        // console.log(like)
      }}><Badge badgeContent={dislike} color="error"> 👎</Badge></IconButton> 

      {/* // <button onClick={() => {
      //   setDislike(dislike + 1);
      //   // console.log(like)
      // }}>Dislike {dislike}</button> */}
      {/* <p>{like}</p> */}
    </div>
  );
}
