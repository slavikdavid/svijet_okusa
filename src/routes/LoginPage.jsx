import { useTranslation } from "react-i18next";
import { Heading } from '@chakra-ui/react'

const LoginPage = () => {
    const { t } = useTranslation();
    return (
      <>
        <Heading>{t("login")}</Heading>
      </>
    )
  }
  
  export default LoginPage