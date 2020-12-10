import { Menu, Segment } from "semantic-ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Link to="/">
          <Menu.Item
            as="div"
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/about">
          <Menu.Item
            as="div"
            name="about"
            active={activeItem === "about"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/users">
          <Menu.Item
            as="div"
            name="users"
            active={activeItem === "users"}
            onClick={handleItemClick}
          />
        </Link>
      </Menu>
    </Segment>
  );
};
