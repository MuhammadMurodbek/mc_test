import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar className='position-relative main_back_color'>
      <div className='d-flex w-100 justify-content-between px-3 py-1'>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default TextLinkExample;