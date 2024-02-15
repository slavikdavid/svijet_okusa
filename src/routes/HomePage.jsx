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
          <Heading>{t("hello")} 'user'!</Heading>
          <Heading size="md">{t("homepage_greeting")}?</Heading>
        </Stack>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="black" />
          </InputLeftElement>
          <Input placeholder={t("homepage_search_prompt")} />
          <InputRightElement minWidth="8.5rem">
            <Button colorScheme="red" w="100%">
              {t("search")}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Grid templateColumns="repeat(3, 1fr)" gap={6} my={4}>
          <GridItem w="100%" h="10">
            <Menu>
              <MenuButton as={Button} textAlign="center" w="100%">
                <HStack spacing={2}>
                  <CarrotIcon />
                  <Text>{t("ingredients")}</Text>
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
                  <Text>{t("preparation_time")}</Text>
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
                  <Text>{t("advanced_search")}</Text>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Item 1</MenuItem>
              </MenuList>
            </Menu>
          </GridItem>
        </Grid>

        <Heading mt={12}>{t("currently_in_season")}</Heading>

        <Grid templateColumns="repeat(5, 1fr)" gap={4} my={6}>
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

          <GridItem
            rounded="xl"
            h="10"
            bg="gray.100
"
          >
            <Center>{t("all_ingredients")}</Center>
          </GridItem>
        </Grid>

        <Heading mt={12}>{t("categories")}</Heading>

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
            <Center>{t("all_categories")}</Center>
          </GridItem>
        </Grid>

        <Heading mt={12}>{t("featured_recipes")}</Heading>

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
            <Center>{t("all_recipes")}</Center>
          </GridItem>
        </Grid>

        <Heading mt={12}>{t("newest_recipes")}</Heading>

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
            <Center>{t("all_recipes")}</Center>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
