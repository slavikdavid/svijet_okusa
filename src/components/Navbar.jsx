import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Select, Heading, Link as ChakraLink} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { i18n, t } = useTranslation();

    return (
        <div>
        <Heading>Navbar</Heading>
        <ChakraLink as = {ReactRouterLink} to="/">{t("homepage")}</ChakraLink>
        <ChakraLink as = {ReactRouterLink} to="/recipe">{t("recipe")}</ChakraLink>
        <ChakraLink as = {ReactRouterLink} to="/recipes">{t("recipes")}</ChakraLink>
        <ChakraLink as = {ReactRouterLink} to="/ingredient">{t("ingredient")}</ChakraLink>
        <ChakraLink as = {ReactRouterLink} to="/ingredients">{t("ingredients")}</ChakraLink>
        <ChakraLink as = {ReactRouterLink} to="/login">{t("login")}</ChakraLink>
        <div>
        <Select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="sl">Slovenian</option>
      <option value="hr">Croatian</option>
    </Select>
    </div>
    </div>
    )
}

export default Navbar