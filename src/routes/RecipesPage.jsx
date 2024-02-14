import { useTranslation } from "react-i18next";

const RecipesPage = () => {
    const { t } = useTranslation();
    return (
      <>
        <h1>{t("recipes")}</h1>
      </>
    )
  }
  
  export default RecipesPage