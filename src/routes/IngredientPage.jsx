import { useTranslation } from "react-i18next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
  Center,
  Grid,
  GridItem,
  Spinner,
} from "@chakra-ui/react";

import { ChevronRight } from "lucide-react";

const IngredientPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container
        maxW="full"
        h="200px"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgImage="https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></Container>
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

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{t("ingredient")}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading>{t("ingredient")}</Heading>

        <Text align="justify" my={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit
          ligula in luctus ultrices. Donec et sem id orci mollis consectetur.
          Proin lobortis sem ut blandit consectetur. Mauris non sem erat. Etiam
          eros ligula, lacinia a urna a, lacinia cursus eros. Integer
          consectetur fermentum est sed rutrum. Sed ultricies tincidunt metus,
          at dapibus nunc auctor id. Phasellus ac gravida purus. Integer blandit
          blandit leo sit amet interdum.{" "}
        </Text>

        <Heading mt={12}>{t("top_recipes_by_ingredient")}</Heading>

        <Grid templateColumns="repeat(5, 1fr)" gap={4} my={6}>
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

          <GridItem rounded="xl" h="10">
            <Center>{t("all_recipes")}</Center>
          </GridItem>
        </Grid>

        <Heading mt={12}>{t("newest_recipes_by_ingredient")}</Heading>

        <Grid templateColumns="repeat(5, 1fr)" gap={4} my={6}>
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

          <GridItem rounded="xl" h="10">
            <Center>{t("all_recipes")}</Center>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default IngredientPage;
