import { useTranslation } from "react-i18next";
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Heading,
  HStack,
  Menu,
  Flex,
  MenuButton,
  MenuList,
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
      <Container p={5}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="black" />
          </InputLeftElement>
          <Input placeholder="Enter search prompt..." />
          <InputRightElement width="4.5rem">
            <Button colorScheme="red">Search</Button>
          </InputRightElement>
        </InputGroup>
        <Flex justify="space-between" py={15}>
          <Menu>
            <MenuButton as={Button}>
              <CarrotIcon />
              Ingredients
            </MenuButton>
            <MenuList>
              <MenuItem>Item 1</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button}>
              <TimerIcon />
              Preparation time
            </MenuButton>
            <MenuList>
              <MenuItem>Item 1</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button}>
              <SlidersHorizontalIcon />
              Advanced Search
            </MenuButton>
            <MenuList>
              <MenuItem>Item 1</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </>
  );
};

export default HomePage;
