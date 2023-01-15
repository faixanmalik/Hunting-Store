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

              
              <div className="flex ml-6 items-center">
                <span className="mr-3">Category: </span>
                <div className="relative">
                  <select name='category' value={category} onChange={handleChange} className="rounded-md border pl-2 appearance-none py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-800 text-base l-3 pr-10" required>
                    <option value={'tshirt'}>Tshirts</option>
                    <option value={'hoodies'}>Hoodies</option>
                    <option value={'mugs'}>Mugs</option>
                    <option value={'sneakers'}>Sneakers</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size: </span>
                <div className="relative">
                  <select name='size' value={size} onChange={handleChange} className="rounded-md border pl-2 appearance-none py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-800 text-base l-3 pr-10">
                    <option value={'s'}>S</option>
                    <option value={'m'}>M</option>
                    <option value={'l'}>L</option>
                    <option value={'xl'}>XL</option>
                    <option value={'xxl'}>XXL</option>

                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center" required>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>



              <div className="flex ml-6 items-center">
                <span className="mr-3">Color: </span>
                <div className="relative">
                  <select name='color' value={color} onChange={handleChange} className="rounded-md border pl-2 appearance-none py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-800 text-base l-3 pr-10" required>
                    <option value={'black'}>Black</option>
                    <option value={'blue'}>Blue</option>
                    <option value={'white'}>White</option>
                    <option value={'green'}>Green</option>
                    <option value={'yellow'}>Yellow</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>



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