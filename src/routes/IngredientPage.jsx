import { useTranslation } from "react-i18next";

const IngredientPage = () => {
    const { t } = useTranslation();
    return (
      <>
        <h1>{t("ingredient")}</h1>
      </>
    )
  }
  
  export default IngredientPage