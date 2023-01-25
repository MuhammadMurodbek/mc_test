import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const SearchField = () => {
  return (
    <div className='d-flex flex-row gap-3 my-4 m-left-auto w-75'> 
        <Form.Control type="text" placeholder='text'/>
        <Form.Control type="text" placeholder='text'/>
        <Form.Control type="text" placeholder='text'/>
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
        <Button className='px-5'>search</Button>
    </div>
  )
}

export default SearchField