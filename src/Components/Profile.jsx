import React from "react";
import {
  Box,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Profile = () => {
  let welcome = JSON.parse(localStorage.getItem("Welcome"));
  let token = JSON.parse(localStorage.getItem("Token"));
  let profile = JSON.parse(localStorage.getItem("profile"));

  if (!welcome) {
    let text = "welcome hii this is profile page..";
    if (window.confirm(text) === true) {
      text = "You pressed OK!";
      localStorage.setItem("Welcome", JSON.stringify("Yes"));
    } else {
      text = "You canceled!";
    }
  }

  if (token) {
    return (
      <Box p="155">
        <Box>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://source.unsplash.com/random/200x200?sig=1"
              alt="profile logo"
            />

            <Stack>
              <CardBody>
                <Heading size="md">{profile.fullName}</Heading>

                <Text py="2">email - {profile.email}</Text>
              </CardBody>

              <CardFooter>User Name - {profile.userName}</CardFooter>
            </Stack>
          </Card>
        </Box>
        <Box></Box>
      </Box>
    );
  } else {
    return (
      <div>
        <Box p="20">
          <Heading>Please Login ...</Heading>
        </Box>
      </div>
    );
  }
};

export default Profile;
