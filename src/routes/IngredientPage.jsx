import { useTranslation } from "react-i18next";
import { Heading } from "@chakra-ui/react";

const IngredientPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading>{t("ingredient")}</Heading>
    </>
  );
};

export default IngredientPage;
