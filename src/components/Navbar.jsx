import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { i18n, t } = useTranslation();

    return (
        <div>
        <h1>Navbar</h1>
        <p>
        <Link to="/">{t("homepage")}</Link>
        </p>
        <p>
        <Link to="/recipe">{t("recipe")}</Link>
        </p>
        <p>
        <Link to="/recipes">{t("recipes")}</Link>
        </p>
        <p>
        <Link to="/ingredient">{t("ingredient")}</Link>
        </p>
        <p>
        <Link to="/ingredients">{t("ingredients")}</Link>
        </p>
        <p>
        <Link to="/login">{t("login")}</Link>
        </p>
        <div>
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="sl">Slovenian</option>
        <option value="hr">Croatian</option>
      </select>
    </div>
    </div>
    )
}

export default Navbar