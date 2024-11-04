import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar variant='light' expand="lg" className="bg-light">
      <Container fluid>
        <Navbar.Brand href="/" className='align-items-center d-flex ms-5'>
        <svg width="61" height="41" viewBox="0 0 61 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule ="evenodd" d="M14.4937 11.5548L11.7325 23.2039C11.042 26.1173 8.09591 28.0352 5.15229 27.4877C2.20867 26.9402 0.382197 24.1346 1.07275 21.2212L4.82445 5.39297C4.95502 4.84211 5.16623 4.32684 5.44281 3.8571C6.24809 1.6743 8.34704 0.117828 10.8095 0.117828H54.7049C57.8631 0.117828 60.4234 2.67808 60.4234 5.83632C60.4234 8.99455 57.8631 11.5548 54.7049 11.5548H14.4937Z" fill="#2C7BD8"/>
          <path fillRule="evenodd" clipRule ="evenodd" d="M47.3319 28.6808L50.093 17.0318C50.7836 14.1184 53.7297 12.2005 56.6733 12.748C59.6169 13.2955 61.4434 16.1011 60.7528 19.0145L57.0011 34.8427C56.8706 35.3936 56.6593 35.9088 56.3828 36.3786C55.5775 38.5614 53.4785 40.1178 51.0161 40.1178H7.12068C3.96245 40.1178 1.4022 37.5576 1.4022 34.3993C1.4022 31.2411 3.96245 28.6808 7.12069 28.6808H47.3319Z" fill="#B03C2A"/>
          <path d="M27.3388 21.9026C27.3388 24.579 24.8687 26.8487 21.6907 26.8487C18.5127 26.8487 16.0427 24.579 16.0427 21.9026C16.0427 19.2261 18.5127 16.9564 21.6907 16.9564C24.8687 16.9564 27.3388 19.2261 27.3388 21.9026Z" stroke="#2C7EDE"/>
          <path d="M47.0125 18.0902C47.0125 20.7667 44.5425 23.0364 41.3645 23.0364C38.1864 23.0364 35.7164 20.7667 35.7164 18.0902C35.7164 15.4138 38.1864 13.144 41.3645 13.144C44.5425 13.144 47.0125 15.4138 47.0125 18.0902Z" stroke="#C17E7B"/>
        </svg>
          <Nav.Link className="d-none d-sm-inline text-decoration-none text-dark position-absolute" style={{marginLeft:'70px', fontWeight: '500'}} href='/'>Ставровская школа самбо</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-center w-100">
            <Nav.Link href="#features">Главная</Nav.Link>
            <Nav.Link href="#pricing">Новости</Nav.Link>
            <Nav.Link href="#pricing">О нас</Nav.Link>
            <NavDropdown title="Еще" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Наши спортсмены</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Запись на пробное занятие</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Бронирование татами</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Button variant='primary' className='me-5' href="/login">Авторизоваться</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
