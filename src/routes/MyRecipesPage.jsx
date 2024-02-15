import { useTranslation } from "react-i18next";
import { Heading } from "@chakra-ui/react";

const MyRecipesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading>{t("my-recipes")}</Heading>
    </>
  );
};

export default MyRecipesPage;
