import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Select, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import {
  HStack,
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";

import { Globe, Sun, Moon } from "lucide-react";

import getUnicodeFlagIcon from "country-flag-icons/unicode";

const Navbar = () => {
  const { i18n, t } = useTranslation();

  const NavLink = (props) => {
    const { children } = props;

    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
      >
        {children}
      </Box>
    );
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <HStack>
                <ChakraLink as={ReactRouterLink} to="/my-recipes">
                  {t("myrecipes")}
                </ChakraLink>
              </HStack>

              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<Globe />}
                />
                <MenuList onClick={(e) => i18n.changeLanguage(e.target.value)}>
                  <MenuItem
                    value="en"
                    onClick={(e) => i18n.changeLanguage(e.target.value)}
                  >
                    {getUnicodeFlagIcon("GB")} English
                  </MenuItem>
                  <MenuItem value="si">
                    <Text fontSize="">
                      {getUnicodeFlagIcon("SI")} Slovenian
                    </Text>
                  </MenuItem>
                  <MenuItem value="hr">
                    {getUnicodeFlagIcon("HR")} Croatian
                  </MenuItem>
                </MenuList>
              </Menu>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <Moon size="24" /> : <Sun size="24" />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Buster"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"xl"}
                      src={
                        "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Buster"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <ChakraLink as={ReactRouterLink} to="/edit-profile">
                      {t("editprofile")}
                    </ChakraLink>
                  </MenuItem>
                  <MenuItem>
                    <ChakraLink as={ReactRouterLink} to="/logout">
                      {t("logout")}
                    </ChakraLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
