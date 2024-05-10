import { Link } from "react-router-dom";
import { Menu } from "antd";

const NavBar = (): JSX.Element => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
