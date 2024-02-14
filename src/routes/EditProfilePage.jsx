import { useTranslation } from "react-i18next";
import { Heading } from "@chakra-ui/react";

const EditProfilePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading>{t("editprofile")}</Heading>
    </>
  );
};

export default EditProfilePage;
