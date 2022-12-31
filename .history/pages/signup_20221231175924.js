import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')


  const submit = (e) => {
    e.preventDefault()
    


    // fetch the data from form to makes a file in local system
    const data = { firstname, lastname, email, password, confirmpassword };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Thanks for submitted your creditionals! Please Login!');
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setConfirmpassword('')

      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const handleChange = (e) => {
    if (e.target.name === 'firstname') {
      setFirstname(e.target.value)
    }
    else if (e.target.name === 'lastname') {
      setLastname(e.target.value)
    }
    else if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
    else if (e.target.name === 'confirmpassword') {
      setConfirmpassword(e.target.value)
    }
  }

  return (


    <form action="POST" onSubmit={submit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col py-20">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              onChange={handleChange}
              value={firstname}
              className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              name="firstname"
              placeholder="First Name"
            />
            <input
              type="text"
              onChange={handleChange}
              value={lastname}
              className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              name="lastname"
              placeholder="Last Name"
            />

            <input
              type="text"
              onChange={handleChange}
              value={email}
              className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              onChange={handleChange}
              value={password}
              className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              onChange={handleChange}
              value={confirmpassword}
              className="bg-gray-100 bg-opacity-50 mb-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
            <button
              type="submit"
              className="w-full text-center py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
      
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
