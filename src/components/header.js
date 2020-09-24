import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";

const Header = ({ siteTitle, data }) => (
  
  <Navbar expand="lg">
    <Navbar.Brand as={Link} to="/">
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Nápady">
          {
            data.ideas.edges.map(({ node }) => (
              <NavDropdown.Item href={node.fields.slug} key={node.fields.slug + "-id"}>
                <Nav.Link as={Link} activeClassName="active" to={node.fields.slug}>{node.frontmatter.title}</Nav.Link>
              </NavDropdown.Item>
            ))
          }
        </NavDropdown>
        <NavItem href="/assets">
          <Nav.Link as={Link} activeClassName="active" to="/assets">
            Súbory
          </Nav.Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;