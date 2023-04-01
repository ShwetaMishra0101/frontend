import {
  Box,
  Button,
  Heading,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CodeChallenge = () => {

  let token = JSON.parse(localStorage.getItem("Token"));
  const [number, setNumber] = useState(Number);
 
  let ans=""

  const [show,setShow]=useState("")

const print=()=>{
  setShow(ans)
}

  const handleCheck = () => {

    function smallestPositiveInt(arr) {
    
      arr.sort((a, b) => a - b);
  
      let smallestInt = 1;
  

      for (let i = 0; i < arr.length; i++) {
      
        if (arr[i] === smallestInt) {
          smallestInt++;
        }
      }
  

      return smallestInt;
    }

   let num=number.split("").map(Number);
 
   function check(){
    let n=number.length;
    for(let i=0;i<number.length;i++){

      if(!(n>=1 && n<=10000000)){
        alert("Out of Range ")
        return false
      }

      else if(num[i]<=-10000000 && num[i]>=10000000){
        alert("Given value too Long")
        return false
      }
      else
      {
        return true
      }
   }


    }
    if(check){
      const arr =num;
      console.log(num)
      const res = smallestPositiveInt(arr);
      ans=res
      console.log(res);
    }
  };
  

  if (token) {
    return (
      <Box p="2">
        <Box p="2">
          <Heading>Code Challenge</Heading>
        </Box>
        <Box p="15" bg="teal" color={"white"}>
          <Card align="center" bg="teal" color={"white"} textAlign="justify">
            <CardHeader>
              <Heading size="md">Function </Heading>
            </CardHeader>
            <CardBody textAlign={"justify"}>
              <Text>
                Write A Function that, given a Array A of N Integers , return
                the Smallest Positive Integer (Greater than 0) That does not
                Match Occur in A.
              </Text>
            </CardBody>
            <CardFooter textAlign={"justify"}>
              Example :{" "}
              <Text>
                Given A=[1,3,6,4,1,2] that function should Return 5. Given
                A=[1,2,3] that function return 4.
              </Text>
            </CardFooter>
            Write an efficient algorithm for the following assumptions{" "}
            <Text>N is a Integer within the range [1...100,0000]</Text>
            Each Element or Array A is an Integer within the Range
            [-1,000,0000.....1,000,0000]
          </Card>
          <Box p="5">
            <Flex gap="5px">
              <Box>
                <Input
                  type="number"
                  bg="white"
                  color="black"

                  onChange={(e) => setNumber(e.target.value)}
                  onBlur={handleCheck}
                />
              </Box>
              <Box>
                <Button bg="black" color="white" onClick={print}>
                  Print Result
                </Button>
              </Box>
            </Flex>
            <Flex p="5">
              OUTPUT: &nbsp;  {show}
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (

      <Box>
        <Box p="20">
          <Heading>Please Login first....</Heading>
        </Box>
      </Box>
      
    );
  }
};

export default CodeChallenge;
