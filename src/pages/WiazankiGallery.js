import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import Menu from '../components/Menu'
import { photos } from "../components/photos";


const WiazankiGallery = () => {

return (
    <div>
        <Menu/>
    <SRLWrapper>
    <Gallery photos={photos} direction={"column"} margin={4}/>
    </SRLWrapper>
    </div>
)
}
export default WiazankiGallery;