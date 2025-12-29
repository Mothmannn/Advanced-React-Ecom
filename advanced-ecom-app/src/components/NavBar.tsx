import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

interface NavBarProps {
  onCategorySelect?: (value: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onCategorySelect }) => {
  const location = useLocation();
  const isCart = location.pathname === "/cart";

  return (
    <Navbar bg="light">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home |</Nav.Link>
        <Nav.Link href="/cart">Cart |</Nav.Link>

        {!isCart && (
          <Dropdown
            placeholder="Filter Category"
            onSelect={(value) => onCategorySelect?.(value)}
          />
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
