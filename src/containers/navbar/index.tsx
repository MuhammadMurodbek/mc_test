import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar className='position-relative main_back_color'>
      <div className='d-flex w-100 justify-content-between px-3 py-1'>
        <Navbar.Brand href="#home" className='text-white'>
          <i className='fa fa-industry'></i>
          <span className='px-2'>Shaffof qurilish</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-white '>
            Signed in as: Mark Otto
          </Navbar.Text>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default TextLinkExample;