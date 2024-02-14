import { useTranslation } from "react-i18next";
import { Heading } from '@chakra-ui/react'

const IngredientsPage = () => {
    const { t } = useTranslation();
    return (
      <>
        <Heading>{t("ingredients")}</Heading>
      </>
    )
  }
  
  export default IngredientsPage