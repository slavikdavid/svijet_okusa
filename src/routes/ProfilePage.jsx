import { useTranslation } from "react-i18next";
import { Heading } from "@chakra-ui/react";

const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading>{t("profile")}</Heading>
    </>
  );
};

export default ProfilePage;
