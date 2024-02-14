import { useTranslation } from "react-i18next";
import { Container, Heading } from "@chakra-ui/react";

const RecipesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading>{t("recipes")}</Heading>
    </>
  );
};

export default RecipesPage;
