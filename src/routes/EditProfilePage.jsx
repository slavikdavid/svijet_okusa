import { useTranslation } from "react-i18next";

const EditProfilePage = () => {
    const { t } = useTranslation();
    return (
      <>
        <h1>{t("editprofile")}</h1>
      </>
    )
  }
  
  export default EditProfilePage