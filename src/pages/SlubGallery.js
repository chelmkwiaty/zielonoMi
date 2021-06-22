import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import { photos_3 } from "../components/photos";


const SlubGallery = () => {

return (
    <div>
    <SRLWrapper>
    <Gallery photos={photos_3} direction={"column"} margin={4}/>
    </SRLWrapper>
    </div>
)
}
export default SlubGallery;