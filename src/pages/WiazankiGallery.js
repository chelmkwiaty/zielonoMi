import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import { photos } from "../components/photos";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const WiazankiGallery = () => {

return (
    <div>
    <SRLWrapper>
    <Gallery photos={photos} direction={"column"} margin={4}/>
    </SRLWrapper>
    </div>
)
}
export default WiazankiGallery;