import React, { useState } from 'react'
import { Button, Modal } from 'reactstrap';
import CarouselWiazanki from '../components/CarouselWiazanki'

const ModalWiazanki = (props) => {

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    return(
        <div>
        <Button color="danger" onClick={toggle}>Open</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
       <CarouselWiazanki/>
        </Modal>
      </div>
    )
}

export default ModalWiazanki;