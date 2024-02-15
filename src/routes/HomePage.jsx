import { useTranslation } from "react-i18next";
import {
  Button,
  Container,
  Input,
  Center,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Heading,
  HStack,
  Grid,
  GridItem,
  Menu,
  Flex,
  Text,
  Stack,
  MenuButton,
  MenuList,
  Spinner,
  MenuItem,
} from "@chakra-ui/react";
import {
  SearchIcon,
  CarrotIcon,
  TimerIcon,
  SlidersHorizontalIcon,
} from "lucide-react";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container p={5} maxW={800}>
        <Stack my={8}>
          <Heading>Hello 'user'!</Heading>
          <Heading size="md">What will you prepare today?</Heading>
        </Stack>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="black" />
          </InputLeftElement>
          <Input placeholder="Enter search prompt..." />
          <InputRightElement minWidth="8.5rem">
            <Button colorScheme="red" w="100%">
              Search
            </Button>
          </InputRightElement>
        </InputGroup>

        <Grid templateColumns="repeat(3, 1fr)" gap={6} my={4}>
          <GridItem w="100%" h="10">
            <Menu>
              <MenuButton as={Button} textAlign="center" w="100%">
                <HStack spacing={2}>
                  <CarrotIcon />
                  <Text>Ingredients</Text>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Item 1</MenuItem>
              </MenuList>
            </Menu>
          </GridItem>
          <GridItem w="100%" h="10">
            <Menu>
              <MenuButton as={Button} textAlign="center" w="100%">
                <HStack spacing={2}>
                  <TimerIcon />
                  <Text>Preparation time</Text>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Item 1</MenuItem>
              </MenuList>
            </Menu>
          </GridItem>
          <GridItem w="100%" h="10">
            <Menu>
              <MenuButton as={Button} textAlign="center" w="100%">
                <HStack spacing={2}>
                  <SlidersHorizontalIcon />
                  <Text>Detailed</Text>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Item 1</MenuItem>
              </MenuList>
            </Menu>
          </GridItem>
        </Grid>

        <Heading mt={12}>Currently in season</Heading>

        <Grid templateColumns="repeat(4, 1fr)" gap={4} my={6}>
          <GridItem rounded="xl" h="40" bg="gray.100">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40" bg="gray.100">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
        </Grid>

        <Heading mt={12}>Categories</Heading>

        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          my={6}
        >
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>

          <GridItem
            rounded="xl"
            h="10"
            bg="gray.100
"
          >
            <Center>All categories</Center>
          </GridItem>
        </Grid>

        <Heading mt={12}>Featured recipes</Heading>

        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          my={6}
        >
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>

          <GridItem
            rounded="xl"
            h="10"
            bg="gray.100
"
          >
            <Center>All recipes</Center>
          </GridItem>
        </Grid>

        <Heading mt={12}>Newest recipes</Heading>

        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          my={6}
        >
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>

          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>

          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>

          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>

          <GridItem
            rounded="xl"
            h="40"
            bg="gray.100
"
          >
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>

          <GridItem
            rounded="xl"
            h="10"
            bg="gray.100
"
          >
            <Center>All recipes</Center>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
