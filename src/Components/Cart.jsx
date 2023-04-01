import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";

const Cart = () => {

  const [val,setVal] = useState(1)
  const handleInc=()=>{
    setVal(val+1)
  }
  const handleDec=()=>{
    if(val>1){
      setVal(val-1)
    }
  }

  let cart=JSON.parse(localStorage.getItem("cart"))||1
  return (
    <Box p="15">
      <Box p="25">
      <SimpleGrid columns={[1, 1, 2, 4]} spacing="40px">
 
            {cart.length>1 && cart.map((el, i) => {
              return (
                <Card maxW="sm" key={i}>
                  <CardBody>
                    <Image
                      src={el.image}
                      alt="Green double couch "
                      borderRadius="sm"
                    />
                    <Stack mt="6" spacing="3" textAlign={"justify"}>
                      <Heading size="md">{el.title}</Heading>
                      <Text>
                        <b>Rating:{el.rating.rate}</b>
                      </Text>
                      <Text>
                        <b>category:</b>
                        {el.category}
                      </Text>
                      <Text color="teal" fontSize="2xl">
                        ₹{el.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                        <Box alignItems={"center"}>
                          <Button onClick={()=>handleInc(el,i)}>+</Button>
                          {val}
                          <Button onClick={()=>handleDec(el,i)}>-</Button>
                        </Box>
                
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}
          </SimpleGrid>
      </Box>
      <Box float="right" p="1">
        <Button bg="black" color="white">Checkout</Button>
      </Box>
    </Box>
  );
};

export default Cart;
