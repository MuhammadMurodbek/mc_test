import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Logo from "../../assets/mc_logo.jpg"

const ImageSide = () => {
  return (
    <Container>
        <Image src={Logo} alt="logo_image"/>
    </Container>
  )
}

export default ImageSide