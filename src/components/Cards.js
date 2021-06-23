import React from 'react'
import {Link} from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import cardWiazanki from '../img/cards/cardWiazanki.webp'
import cardBouquet from '../img/CardBouquet/cardBouquet.webp'
import cardSlub from '../img/CardSlub/cardSlub.webp'
import cardKosze from '../img/CardKosze/cardKosze.webp'
import cardCmentar from '../img/CardCmentar/cardCmentar.webp'
import {useTranslation} from "react-i18next";
import '../trans/i18n'

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '0px',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 200,
    minHeight: 360,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
}));


const Cards = () => {

  const { t } = useTranslation();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  
return(
    <>
    <NoSsr>
    <GoogleFontLoader
      fonts={[
        { font: 'Spartan', weights: [300] },
        { font: 'Montserrat', weights: [200, 400, 700] },
      ]}
    />
  </NoSsr>
  <Link to="/BouquetGallery">
  <Card className={styles.card}>
    <CardMedia
      classes={mediaStyles}
      image={cardBouquet}
    />
    <Box py={3} px={2} className={styles.content}>
      <Info useStyles={useGalaxyInfoStyles}>
        <InfoTitle>{t("cards.special")}</InfoTitle>
        <InfoCaption>Zielono Mi</InfoCaption>
      </Info>
    </Box>
    
  </Card>
  </Link>
  <Link to="/SlubGallery">
  <Card className={styles.card}>
    <CardMedia
      classes={mediaStyles}
      image={cardSlub}
    />
    <Box py={3} px={2} className={styles.content}>
      <Info useStyles={useGalaxyInfoStyles}>
        <InfoTitle>{t("cards.wedding")}</InfoTitle>
        <InfoCaption>Zielono Mi</InfoCaption>
      </Info>
    </Box>
    
  </Card>
  </Link>
  <Link to="/KoszeGallery">
  <Card className={styles.card}>
    <CardMedia
      classes={mediaStyles}
      image={cardKosze}
    />
    <Box py={3} px={2} className={styles.content}>
      <Info useStyles={useGalaxyInfoStyles}>
        <InfoTitle>{t("cards.flower")}</InfoTitle>
        <InfoCaption>Zielono Mi</InfoCaption>
      </Info>
    </Box>
    
  </Card>
  </Link>
  <Link to="/WiazankiGallery">
  <Card className={styles.card}>
    <CardMedia
      classes={mediaStyles}
      image={cardWiazanki}
    />
    <Box py={3} px={2} className={styles.content}>
      <Info useStyles={useGalaxyInfoStyles}>
        <InfoTitle>{t("cards.wiazanki")}</InfoTitle>
        <InfoCaption>Zielono Mi</InfoCaption>
      </Info>
    </Box>
    
  </Card>
  </Link>
  <Link to="/CmentarGallery">
  <Card className={styles.card}>
    <CardMedia
      classes={mediaStyles}
      image={cardCmentar}
    />
    <Box py={3} px={2} className={styles.content}>
      <Info useStyles={useGalaxyInfoStyles}>
        <InfoTitle>{t("cards.cemetery")}</InfoTitle>
        <InfoCaption>Zielono Mi</InfoCaption>
      </Info>
    </Box>
    
  </Card>
  </Link>
  </>
  
)
}

export default Cards;