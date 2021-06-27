import React from "react"
import {useTranslation} from "react-i18next";
import '../trans/i18n'
import Menu from '../components/Menu'

const About = () => {

    const { t } = useTranslation();

    return(
        <>
        <Menu/>
    <div className="about">
       
        <p className="text">{t("about.family")} ' Zielono Mi ' {t("about.year")}<br/> {t("about.motto")}<br/>
' {t("home.slogan")} '<br/> {t("home.author")}</p>
    </div>
    </>
    )
}
export default About;