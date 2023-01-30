import { useNavigate,useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect , useState} from "react";
import {API} from"./global"


// function AddBook(){
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   const [bookList, setBookList] = useState("INITIAL_BOOK_LIST ");
//   return(
//     <div className="add-book-form">
// <input type="text" placeholder="Enter Book a Name"onChange={(event) => setName(event.target.value)}  />
// <input type="text"  placeholder="Enter Book a Name"onChange={(event) => setPoster(event.target.value)}  />
// <input type="text"  placeholder="Enter Book a Name"onChange={(event) => setRating(event.target.value)}  />
// <input type="text"  placeholder="Enter Book a Name"onChange={(event) => setSummary(event.target.value)}  />
// <button onClick={() => 
//   { const newBook={
//     name: name,
//     poster:poster,
//     rating: rating,
//     summary:summary,  
//  }
//   setBookList([...bookList, newBook])}}>AddBook</button>
//     </div>
//   )
// }
export function BookDetail({ bookList }) {

  const { bookid } = useParams();
  const navigate=useNavigate();
  // const book = bookList[bookid];
  const [book, setBook] = useState({});
  
 useEffect(() => {
  fetch(`${API}/book/${bookid}`,{
  method:"GET" ,})
  .then((data) => data.json())
  .then((bk) =>{
    setBook(bk)
  })
 },[])

  return (
    <div>
      <iframe width="100%" 
       height="500px" 
       src={book.trailer}
       title="The Power of Your Subconscious Mind | The Book Show ft. RJ Ananthi | Suthanthira Paravai" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       allowfullscreen></iframe>
 <div className="book-detail-container">
      <div className="book-specs">
      <h2 className="book-name">{book.name}</h2>
      <p className="book-rating" >⭐{book.rating}</p>
      </div>
 <p className ="book-summary">{book.summary}</p> 
 <Button onClick={()=>navigate(-1)} variant="contained" startIcon={< ArrowBackIosIcon/>}>BACK</Button>
 {/* <Button variant="outlined" startIcon={<DeleteIcon />}> */}
        
      </div> 
      </div> 
      );}