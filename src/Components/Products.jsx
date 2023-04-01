import React, { useEffect, useState } from "react";
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
const Products = () => {

  let item = [];
  const [data, setData] = useState([]);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let token = JSON.parse(localStorage.getItem("Token"));

  // https://fakestoreapi.com/products
  //  fetching  API's

  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("response was not ok please check it once ");
          }
          return response.json();
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // Add To cart Funcnality

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
    fetchData("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res);

        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },[]);

  if (token) {
    return (

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
                        <b>Rating: {el.rating.rate}</b>
                      </Text>

                      <Text>
                        <b>category: </b>
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
                          variant="solid"
                          colorScheme="teal"
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
    );
  } else {
    return (
      <Box>
        <Box p="16">
          <Heading>Please Login ...</Heading>
        </Box>
      </Box>
    );
  }
};

export default Products;
