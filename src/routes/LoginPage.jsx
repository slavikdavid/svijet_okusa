import { useTranslation } from "react-i18next";

const LoginPage = () => {
    const { t } = useTranslation();
    return (
      <>
        <h1>{t("login")}</h1>
      </>
    )
  }
  
  export default LoginPage