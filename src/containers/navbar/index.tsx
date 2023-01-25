import Navbar from 'react-bootstrap/Navbar';
import image from "../../assets/av_rm.png"
function TextLinkExample() {
	return (
		<Navbar className="position-relative main_back_color">
			<div className="d-flex w-100 justify-content-between px-3 py-1">
				<Navbar.Brand href="#home" className="text-white">
					<i className="fa fa-industry"></i>
					<span className="px-2">Shaffof qurilish</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text className="text-white d-flex align-items-center">
						<img src={image} alt="sa" className='image_avatar' />
					  	<span className='p-0'>Mark Otto</span>
					</Navbar.Text>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default TextLinkExample;
