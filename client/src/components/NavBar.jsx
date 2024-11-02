import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ставровская школа самбо
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="#features">Наши спортсмены</Nav.Link>
            <Nav.Link href="#pricing">Новости</Nav.Link>
            <NavDropdown title="Ещё..." id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Расписание тренировок</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Расписание турниров</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Бронирование татами</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Записаться на пробное занятие</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>     
  );
}

export default NavBar;