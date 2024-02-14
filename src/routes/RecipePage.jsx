import { useTranslation } from "react-i18next";
import { Heading } from "@chakra-ui/react";

const RecipePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading>{t("recipe")}</Heading>
    </>
  );
};

export default RecipePage;
