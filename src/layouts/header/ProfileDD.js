import {React, useEffect,useState} from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import userimg from "../../../assets/images/users/user2.jpg";
import { Box, Menu, Typography, Link, ListItemButton, List, ListItemText, Button, Divider,} from "@mui/material";



const ProfileDD = () => {
  const [anchorEl4, setAnchorEl4] = useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState({value: null})


  useEffect(() => {
    const myUser = JSON.parse(localStorage.getItem('myUser'))
      myUser &&  fetchUser( myUser.token);
  }, [])



  const fetchUser = async(token) =>{
    // fetch the data from form to makes a file in local system
    const data = { token: token  };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()
      setEmail(response.email)
      setName(response.firstname + ' ' + response.lastname)
  }

  // Logout function
  const logout = ()=>{
    localStorage.removeItem("myUser");
    setUser({value:null});
  }





  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <Image
            src={userimg}
            alt={userimg}
            width="30"
            height="30"
            className="roundedCircle"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              sx={{ ml: 1 }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              {name}
            </Typography>
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
          },
        }}
      >
        <Box>
          <Box p={2} pt={0}>
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              onClick={handleClose4}
            >
              <ListItemButton href="/myaccount">
                <ListItemText primary="Edit Profile" />
              </ListItemButton>
              <ListItemButton href="/myaccount">
                <ListItemText primary="Account" />
              </ListItemButton>
              <ListItemButton href="/myaccount">
                <ListItemText primary="Change Password" />
              </ListItemButton>
              <ListItemButton href="/myaccount">
                <ListItemText primary="My Settings" />
              </ListItemButton>
            </List>
          </Box>
          <Divider />
          <Box p={2}>
            <Link onClick={logout}>
              <Button fullWidth variant="outlined" className="no-underline" color="primary">
                Logout
              </Button>
            </Link>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
