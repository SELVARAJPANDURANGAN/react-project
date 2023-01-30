import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export function Book({ book,id,deleteButton,editButton}) {

  const styles = {
    color: book.rating >= 8 ? "green" : "red"
  };
  const [show, setShow] = useState(true);
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate();
  // const book = 
  //   {
  //     name : "charlottes web",
  //     rating : 8,
  //     summary : "Charlotte takes place in an alternate reality where a short-period comet called Charlotte passes near Earth once every 75 years. As this happens, it spreads dust onto the Earth, which causes a small percentage of preadolescent children who inhale the dust to manifest superhuman abilities upon reaching puberty",
  //     poster : "https://th.bing.com/th/id/OIP.StevUbUkH_d5dt6Mp8R-dQHaFX?pid=ImgDet&rs=1"}
  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-specs">
        <h2 className="book-name">{book.name} - {id}</h2>
        <p className="book-rating" style={styles}>⭐{book.rating}</p>
      </div>
      <IconButton aria-label="Toggle-Description" color="primary" onClick={() => setShow(!show)}>{show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      {/*
                  <button onClick ={() =>
                    setShow(!show)}>Toggle Description</button> */}
      <IconButton aria-label="Toggle-Description" color="primary" onClick={() => navigate("/book/" + id)}> <InfoIcon /> </IconButton>

      {/* <p style={summaryStyles} className ="book-summary">{book.summary}</p> */}
      {show ? <p style={summaryStyles} className="book-summary">{book.summary}</p> : ""}
      <Counter />{ deleteButton},{editButton}
    </div>

  );

}
