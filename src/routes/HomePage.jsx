import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();
    return (
      <>
        <h1>{t("homepage")}</h1>
      </>
    )
  }
  
  export default HomePage