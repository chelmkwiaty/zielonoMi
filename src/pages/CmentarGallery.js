import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import { photos_5 } from "../components/photos";


const CmentarGallery = () => {

return (
    <div>
    <SRLWrapper>
    <Gallery photos={photos_5} direction={"column"} margin={4}/>
    </SRLWrapper>
    </div>
)
}
export default CmentarGallery;