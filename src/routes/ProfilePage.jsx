import { useTranslation } from "react-i18next";

const ProfilePage = () => {
    const { t } = useTranslation();
    return (
      <>
        <h1>{t("profile")}</h1>
      </>
    )
  }
  
  export default ProfilePage