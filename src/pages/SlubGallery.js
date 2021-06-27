import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import Menu from '../components/Menu'
import { photos_3 } from "../components/photos";


const SlubGallery = () => {

return (
    <div>
    <Menu/>
    <SRLWrapper>
    <Gallery photos={photos_3} direction={"column"} margin={4}/>
    </SRLWrapper>
    </div>
)
}
export default SlubGallery;