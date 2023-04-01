import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { AiFillEye } from "react-icons/ai";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  InputGroup,
  InputRightElement,

} from "@chakra-ui/react";
const Login = () => {

  const navigate = useNavigate()
  const [show, setShow] = React.useState(false)

  const handleClick = () => setShow(!show)
  let data = JSON.parse(localStorage.getItem("profile"));
  const [password, setPassword] = useState("");
  const [log,setLog]=useState(false)
  const [userName, setUserName] = useState("");
   
  const handleLogin = () => {
    console.log(data);
      if (data.userName === userName && data.password === password) {
        localStorage.setItem("profile",JSON.stringify(data))
        localStorage.setItem("Token",JSON.stringify(Math.floor(1000 + Math.random() * 90000)))
        setLog(true)
        console.log(log+"first")
    
        alert("Login Successfully..");
        navigate("/")
      }
      else if(log === false){
        alert("Username or Password Wrong ")
      }
  };
  return (
    <div className={style.main_div}>
      <div></div>
      <div>
        <div>
          <center>
            <span
              style={{
                height: "120px",
                width: "120px",
                backgroundColor: "teal",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
          </center>
        </div>
        <div style={{fontSize:"30px"}}><b>APP NAME</b></div>
        <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit.</p>
        <FormControl>
          <FormLabel>UserName</FormLabel>
          <Input type="text" onChange={(e) => setUserName(e.target.value)} />
          <FormLabel>Password</FormLabel>
          <InputGroup size='md'>
      <Input
      onChange={(e)=>setPassword(e.target.value)}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <AiFillEye h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </AiFillEye>
      </InputRightElement>
    </InputGroup>
          <Box p="5">
            <Button
              bg="teal"
              paddingLeft={"220px"}
              paddingRight="220px"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          <Box>
            Don't have Account ? <Link to="/signup" style={{ color: "teal" }}>Sign up</Link>
          </Box>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
