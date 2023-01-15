import {React, useState} from 'react'


// React tostify
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



// Admin pannel
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { Grid, Stack, TextField, Button,} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";


function Addproducts() {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [slug, setSlug] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')



  const handleChange = (e)=>{
    if ( e.target.name === 'title') {
      setTitle(e.target.value)
    }
    else if (e.target.name === 'category') {
      setCategory(e.target.value)
    }   
    else if (e.target.name === 'size') {
      setSize(e.target.value)
    }   
    else if (e.target.name === 'color') {
      setColor(e.target.value)
    }   
    else if (e.target.name === 'price') {
      setPrice(e.target.value)
    }   
    else if (e.target.name === 'slug') {
      setSlug(e.target.value)
    }   
    else if (e.target.name === 'desc') {
      setDesc(e.target.value)
    }   
    else if (e.target.name === 'img') {
      setImg(e.target.value)
    }   
  }

  const submit = async (e)=>{
    e.preventDefault()  


    // fetch the data from form to makes a file in local system
    const data = { title, size, price, img,  color, category, slug, desc };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()
      console.log(response)

        if (response.success === true) {
            toast.success(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }
        else{
            toast.error(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

        setTitle('')
        setCategory('')
        setSize('')
        setColor('')
        setPrice('')
        setDesc('')
        setSlug('')
        setImg('')


  }

    return (
    <ThemeProvider theme={theme}>

        <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>
    
    <FullLayout>
      
    {/* React tostify */}
    <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>

    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add Product">
          <form method='POST' onSubmit={submit}>
            <Stack spacing={3}>
              <TextField onChange={handleChange} value={title} name="title" label="Title" variant="outlined"  required/>
              <TextField onChange={handleChange} value={category} name="category" label="Category" variant="outlined"  required/>
              <TextField onChange={handleChange} value={size} name="size" label="Size" variant="outlined"  required/>
              <TextField onChange={handleChange} value={color} name="color" label="Color" variant="outlined"  required/>
              <TextField onChange={handleChange} value={price} name="price" label="Price" variant="outlined"  required/>
              <TextField onChange={handleChange} value={slug} name="slug" label="Slug" variant="outlined"  required/>
              <TextField onChange={handleChange} value={desc} name="desc" label="Description" multiline rows={4} required/>
              <TextField onChange={handleChange} value={img} name="img" label="Image" variant="outlined"  required/>
            </Stack>
            <br />
            <Button type='submit' variant="outlined" mt={2}>Submit</Button>
          </form>
        </BaseCard>
      </Grid>
    </Grid>



      </FullLayout>
    </ThemeProvider>
 )
}

export default Addproducts