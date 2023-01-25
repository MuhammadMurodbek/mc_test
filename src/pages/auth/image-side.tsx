import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/mc_logo-rem.png';

const ImageSide = () => {
	return (
		<Container className="text-center">
			<Image src={Logo} alt="logo_image" className="image_content" />
		</Container>
	);
};

export default ImageSide;
