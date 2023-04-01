import React, { useState } from "react";
import style from "./signup.module.css";
import { Link ,useNavigate} from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  InputGroup,
  InputRightElement,
  
} from "@chakra-ui/react";

import { AiFillEye } from "react-icons/ai";
const SignUp = () => {

  const navigate = useNavigate()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  let data = JSON.parse(localStorage.getItem("Account"));
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName,setFullName] = useState("")
  const [email,setEmail]=useState("")
  const [confirmpassword,setConfirmPassword]=useState("")

  const handleSignup = () => {
    let payload={userName,fullName,email,password,confirmpassword}
    if(!(userName && fullName && email && password && confirmpassword)){
      alert("Please Enter Details...")
    }
    else{
      localStorage.setItem("profile",JSON.stringify(payload))
      alert(" Your Account Created..")
      navigate("/login")
    }
  };

  const checkpassword=()=>{
    if(password!== confirmpassword){
      alert("Old Password dose not Match with Enter Password")
    }
    else{
      return true
    }
  }
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
              display: "inline-block",
              borderRadius: "50%",
            }}
          ></span>
        </center>
      </div>
      <div style={{fontSize:"30px"}}><b>APP NAME</b></div>
      <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
      <FormControl>
        <FormLabel>UserName</FormLabel>
        <Input type="text" onChange={(e) => setUserName(e.target.value)} />

        <FormLabel>FullName</FormLabel>
        <Input type="text" onChange={(e) => setFullName(e.target.value)} />

        <FormLabel>Email</FormLabel>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />

        <FormLabel>Password</FormLabel>
        <InputGroup size='md'>
    <Input
    onChange={(e)=>setPassword(e.target.value)}
      pr='4.5rem'
      type={show ? 'text' : 'password'}
      placeholder='Enter password'
      className={style.inp}
      
    />
    <InputRightElement width='4.5rem'>
      <AiFillEye h='1.75rem' size='sm' onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </AiFillEye>
    </InputRightElement>
  </InputGroup>
  <FormLabel>Confirm Password</FormLabel>
        <InputGroup size='md'>
    <Input
    onChange={(e)=>setConfirmPassword(e.target.value)}
    onBlur={checkpassword}
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
            onClick={handleSignup}
          >
            Login
          </Button>
        </Box>
        <Box>
          Already have Account ? <Link to="/login" style={{ color: "blue" }}>Login</Link>
        </Box>
      </FormControl>
    </div>
  </div>
  )
}

export default SignUp