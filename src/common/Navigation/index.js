import { toAuthor, toTasks } from "../../routes"
import { Nav, List, Item, StyledNavLink } from "./styled";

const Navigation = () => (
  <Nav>
    <List>
      <Item>
        <StyledNavLink to={toTasks()}>
          Zadania
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to={toAuthor()}>
          O autorze
        </StyledNavLink>
      </Item>
    </List>
  </Nav>
);

export default Navigation;