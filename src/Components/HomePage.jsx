import React, { useEffect, useState } from 'react'
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
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
const HomePage = () => {

  const [data,setData] = useState([])

  let item = [];
  let token=JSON.parse(localStorage.getItem("Token"))

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let wel = JSON.parse(localStorage.getItem("Welcome1"))
  if(!wel){
    let text="welcome hii this is Home page.."
    if(window.confirm(text) === true) {
      text = "You pressed OK!";
      localStorage.setItem("Welcome1",JSON.stringify("Yes"))
    } else {
      text = "You canceld!";
    }
  }
  // Fetching API's Data
  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // Add to cart Function 
  const handleCart = (el, id) => {
    console.log(el);
    cart.push(el);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item Added");
    window.location.reload();
  };
  cart.map((el, i) => {
    item.push(Number(el.id));
  });

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products?limit=4")
      .then((res) => {
        setData(res);
        // console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);

  if(token){
    return (
     <Box p="10">
      <Box  marginLeft="37%"  marginRight="10%" alignItems={"center"}>
      <Carousel/>
      
     </Box>
     <Box>
        <Box p="4%">
          <SimpleGrid columns={[1, 1, 2, 4]} spacing="40px">
            {data.map((el, i) => {
              return (
                <Card maxW="sm" key={i}>
                  <CardBody>
                    <Image
                      src={el.image}
                      alt="Green double couch with wooden legs"
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
                    <ButtonGroup spacing="0">
                      {item.includes(el.id) ? (
                        <Box alignItems={"center"}>
                          <Button>+</Button>
                          {1}
                          <Button>-</Button>
                        </Box>
                      ) : (
                        <Button
                        colorScheme="teal"
                          variant="solid"
                          onClick={() => handleCart(el, i)}
                        >
                          Add To Cart
                        </Button>
                      )}
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
      <Box  p="4" float={"right"}>
        <Button color="white" bg="black" paddingRight={"100px"}  paddingLeft={"100px"} ><Link to="/all_products">All Products</Link></Button>
      </Box>
     </Box>
    )
  }
  else{
    return (
      <Box>

        <Box p="16">
          <Heading>Please Login ...</Heading>
        </Box>
      </Box>
    )
  }

}

export default HomePage