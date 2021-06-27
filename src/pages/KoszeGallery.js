import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import Menu from '../components/Menu'
import { photos_4 } from "../components/photos";


const KoszeGallery = () => {

return (
    <div>
    <Menu/>
    <SRLWrapper>
    <Gallery photos={photos_4} direction={"column"} margin={4}/>
    </SRLWrapper>
    </div>
)
}
export default KoszeGallery;