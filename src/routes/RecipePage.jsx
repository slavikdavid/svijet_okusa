import { useTranslation } from "react-i18next";

const RecipePage = () => {
    const { t } = useTranslation();
    return (
      <>
        <h1>{t("recipe")}</h1>
      </>
    )
  }
  
  export default RecipePage