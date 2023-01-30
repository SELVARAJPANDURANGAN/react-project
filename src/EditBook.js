import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import{useNavigate,useParams} from "react-router-dom";
import{API} from "./global"
import { useEffect , useState} from "react";

export function EditBook() {
  const { bookid } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`${API}/book/${bookid}`,{
    method:"GET" ,})
    .then((data) => data.json())
    .then((bkdata) =>{
      setBook(bkdata)
    })
   },[])
   return book ? <EditBookForm book={book}/> : "Loading.........";

function EditBookForm({book}){
  const navigate = useNavigate();
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);
  const [trailer, setTrailer] = useState(book.trailer);
  return (
   
      <div className="add-book-form">
        <TextField label="Enter Book a Name" variant="outlined" onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter Book a Name" value={name}/>
        <TextField label="Enter a Book poster link" variant="outlined" onChange={(event) => setPoster(event.target.value)} type="text" placeholder="Enter a Book poster link"  value={poster}/>
        <TextField label="Enter a book Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} type="text" placeholder="Enter a book Rating"  value={rating}/>
        <TextField label="Enter about book summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} type="text" placeholder="Enter about book summary"  value={summary}/>
        <TextField label="Enter a Trailer Name" variant="outlined" onChange={(event) => setTrailer(event.target.value)} type="text" placeholder="Enter a Trailer Name" value={trailer} />
        <Button color="success" variant="contained" onClick={() => {
          const updatedBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          // setBookList([...bookList, newBook]);
          // navigate("/book")
          fetch(`${API}/book/${book.id}`,{method:"PUT",
            body :JSON.stringify(updatedBook),
            headers:{"Content-Type": "application/json"},})
            .then((data)=> data.json())
            .then(()=>navigate("/book"))
          
        }}
        >
          SAVE</Button>
      </div>
   
  );
}}
