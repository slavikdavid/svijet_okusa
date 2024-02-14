import { useTranslation } from "react-i18next";
import { Heading } from '@chakra-ui/react'

const HomePage = () => {
    const { t } = useTranslation();
    return (
      <>
        <Heading>{t("homepage")}</Heading>
      </>
    )
  }
  
  export default HomePage