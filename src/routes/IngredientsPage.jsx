import { useTranslation } from "react-i18next";

const IngredientsPage = () => {
    const { t } = useTranslation();
    return (
      <>
        <h1>{t("ingredients")}</h1>
      </>
    )
  }
  
  export default IngredientsPage