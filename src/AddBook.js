import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import{useNavigate} from "react-router-dom";
import{API} from "./global"
import { minHeight } from "@mui/system";
import { useFormik } from "formik"
import * as yup from 'yup';


const bookValidationSchema =  yup.object({
  name:yup
  .string()
 
 .required("why not fill this name"),
  
  poster:yup
  .string()
  .min(8 ,"Need a Longer poster")
  // .max(12,"To much poster")
  .required("why not fill this poster"),

  rating:yup
  .number()
  .min(0,"Need a Longer rating")
  .max(10,"Too much of rating")
  .required("why not fill this rating"),
  
  summary:yup
  .string()
  .min(8 ,"Need a Longer  summary")
  // .max(12,"To much summary")
  .required("why not fill this  summary"),

  trailer:yup
  .string()
  .min(8,"Need a Longer trailer")
  .required("why not fill this trailer"),
  

  })
  

export function AddBook({ bookList, setBookList }) {
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const formik = useFormik({
    initialValues :{
      name:"", 
      poster:"",
      rating:"",
      summary:"",
      trailer:""
    },
    validationSchema:bookValidationSchema,
   
    onSubmit: (newBook)=>{
      // console.log("onSubmit",newBook)
      createBook(newBook);
    }
    
      })

const createBook = (newBook)=>{
  // console.log("createBook",newBook)
    fetch(`${API}/book`,
    {method:"POST",
           body :JSON.stringify(newBook),
           headers:{"Content-Type": "application/json"},
          })
           .then((data)=> data.json())
            .then(()=>navigate("/book"))
            // console.log(newBook)
         setBookList([...bookList,newBook]);
     
           
        };


  return (
    // validationSchema:{ErrorSchema}
   
      <form onSubmit = {formik.handleSubmit} className="add-book-form">
        <TextField 
       
        id="name" 
        name="name" 
        label="Enter Book a Name" 
        variant="outlined"
          onChange = {formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.name}
          />
            
        {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
        <TextField  id="poster" name="poster" label="Enter a Book poster link" variant="outlined"   onChange = {formik.handleChange} onBlur={formik.handleBlur}value={formik.values.poster} />
        {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
        <TextField  id="rating" name="rating" label="Enter a book Rating" variant="outlined"  onChange = {formik.handleChange} onBlur={formik.handleBlur}value={formik.values.rating} />
        {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
        <TextField  id="summary" name="summary" label="Enter about book summary" variant="outlined"   onChange = {formik.handleChange} onBlur={formik.handleBlur}value={formik.values.summary}/>
        {formik.touched.summary && formik.errors.summary ? formik.errors.summary: ""}
        <TextField   id="trailer" name="trailer" label="Enter a Trailer Name" variant="outlined"   onChange = {formik.handleChange} onBlur={formik.handleBlur}value={formik.values.trailer} />
        {formik.touched.trailer && formik.errors.trailer? formik.errors.trailer: ""}
        <Button type="submit" variant="contained" 
        onClick={createBook }
        // onClick={() => {
        //   const newBook = {
        //     name: name,
        //     poster: poster,
        //     rating: rating,
        //     summary: summary,
        //     trailer: trailer,
        //   };
        //   // setBookList([...bookList, newBook]);
        //   // navigate("/book")
        //   fetch(`${API}/book`,{method:"POST",
        //     body :JSON.stringify(newBook),
        //     headers:{"Content-Type": "application/json"},})
        //     .then((data)=> data.json())
        //     .then(()=>navigate("/book"))
          
        // }}
        >
          Add Book</Button>
      </form>
   
  );
}
