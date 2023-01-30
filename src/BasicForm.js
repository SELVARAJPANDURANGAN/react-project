import { minHeight } from "@mui/system";
import { useFormik } from "formik"
import * as yup from 'yup';

const formValidationSchema =  yup.object ({
email:yup
.string()
.min(8,"Need a Longer email")
.required("why not fill this email"),

password:yup
.string()
.min(8 ,"Need a Longer email")
.max(12,"To much password")
.required("why not fill this email"),
})
export function BasicForm() {

  const formik = useFormik({
initialValues :{email:"", password:""},
validationSchema:formValidationSchema,
onSubmit: (values)=>{
  console.log("onSubmit",values)
}

  })
  return (
  <form onSubmit = {formik.handleSubmit}>
    <input 
    id="email"
    name="email"
    onChange = {formik.handleChange} 
    onBlur={formik.handleBlur}
    value={formik.values.email} type="email" placeholder="Enter a Email Id"/>
    <br/>
   {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
    <input
      id="password"
      name="password"
      onChange = {formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password} type="password" placeholder="Enter Password"/>
        <br/>
        {formik.touched.password && formik.errors.password ? formik.errors.password : ""}

    <button type="submit">Submit</button>
  </form>
  )
}
