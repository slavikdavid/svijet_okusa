import { useTranslation } from "react-i18next";
import {
  Heading,
  Container,
  Grid,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Spinner,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronRight, SearchIcon } from "lucide-react";

const IngredientsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container p={5} maxW={800}>
        <Breadcrumb my={1} mb={6} spacing="8px" separator={<ChevronRight />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("homepage")}</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/ingredients">
              {t("ingredients")}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading>{t("ingredients")}</Heading>

        <InputGroup my="4">
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            bg={useColorModeValue("gray.100", "gray.700")}
            placeholder={t("homepage_search_prompt")}
          />
          <InputRightElement minWidth="8.5rem">
            <Button colorScheme="red" w="100%">
              {t("search")}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Grid
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap={4}
          my={6}
        >
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>

          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>

          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
          <GridItem rounded="xl" h="40">
            <Center>
              <Spinner my={50} size="xl" />
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default IngredientsPage;
