import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import { photos_2 } from "../components/photos";


const BouquetGallery = () => {

return (
    <div>
    <SRLWrapper>
    <Gallery photos={photos_2} direction={"column"} margin={4}/>
    </SRLWrapper>
    </div>
)
}
export default BouquetGallery;