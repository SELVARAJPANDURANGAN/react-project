import { Book } from "./Book";
import { useState ,useEffect} from "react";
import {API} from "./global"
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router";


export function BookList() {
  const navigate =useNavigate();
  
const [bookList, setBookList] = useState([]);
  // const bookList = INITIAL_BOOK_LIST; 
  //  const [name, setName] = useState("");
  //   const [poster, setPoster] = useState("");
  //   const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  
  const getBooks = ()=> {
    fetch(`${API}/book`,{
      method:"GET"})
    .then((data) => data.json())
    .then((bkl) =>{
      setBookList(bkl)
    })
}

//  useEffect(() => {
//   fetch(`${API}/book` ,{method:"GET"})
//   .then((data) => data.json())
//   .then((bkl) =>{
//     setBookList(bkl)
//   })
//  },[])

useEffect(() => getBooks(),[]);


  return (
    <div>
      {/* <div className="add-book-form">
            <TextField label="Enter Book a Name" variant="outlined" onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter Book a Name" />
            <TextField label="Enter a Book poster link" variant="outlined" onChange={(event) => setPoster(event.target.value)} type="text"  placeholder="Enter a Book poster link" />
            <TextField label="Enter a book Rating" variant="outlined"  onChange={(event) => setRating(event.target.value)} type="text"  placeholder="Enter a book Rating"  />
            <TextField label="Enter about book summary" variant="outlined"  onChange={(event) => setSummary(event.target.value)}  type="text"  placeholder="Enter about book summary"/>
            <TextField label="Enter a Trailer Name" variant="outlined"  onChange={(event) => setTrailer(event.target.value)}  type="text"  placeholder="Enter a Trailer Name"/>
            <Button variant="contained" onClick={() =>
              
              { const newBook={
                 name: name,
                 poster:poster,
                 rating: rating,
                 summary:summary,
                 trailer: trailer,
              }
               setBookList([...bookList, newBook])}}>Add Book</Button>  */}

      {/* </div> */}
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={bk.id} deleteButton={  <IconButton color="error" aria-label="deleteButton" 
          onClick={() => { fetch(`${API}/book/${bk.id}`,{
            method:"DELETE" ,}) .then(()=> getBooks())
            }}>
      
          < DeleteIcon />
        </IconButton>}
        editButton={  <IconButton color="secondary" aria-label="editButton" 
        onClick={() => navigate(`/book/edit/${bk.id}`)}>
         
    
        < EditIcon />
      </IconButton>}  
        />))}
        
      </div>
    </div>
  );
}
