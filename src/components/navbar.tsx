import { Divider, Link, Navbar as NextNavbar, Text } from "@nextui-org/react";
import { useRef } from "react";

const links = [
  { path: "#projects", name: "Projects" },
  { path: "#aboutme", name: "About" },
  { path: "#contact", name: "Contact" },
];

const sites = [
  { path: "/blog", name: "Blog" },
  { path: "/guides", name: "Guides" },
];

const Navbar = () => {
  const navbarToggleRef = useRef<HTMLButtonElement>(null);

  return (
    <NextNavbar variant="sticky" shouldHideOnScroll>
      <NextNavbar.Toggle showIn="xs" ref={navbarToggleRef} />
      <NextNavbar.Collapse>
        {links.map((link) => (
          <NextNavbar.CollapseItem key={link.path}>
            <Link
              href={link.path}
              color="inherit"
              css={{
                minWidth: "100%",
              }}
            >
              {link.name}
            </Link>
          </NextNavbar.CollapseItem>
        ))}
        {sites.map((link) => (
          <NextNavbar.CollapseItem key={link.path}>
            <Link
              href={link.path}
              color="inherit"
              css={{
                minWidth: "100%",
              }}
            >
              {link.name}
            </Link>
          </NextNavbar.CollapseItem>
        ))}
      </NextNavbar.Collapse>

      <NextNavbar.Brand>
        <Text b>BoxM</Text>
      </NextNavbar.Brand>
      <NextNavbar.Content enableCursorHighlight hideIn="xs">
        {links.map((link) => (
          <NextNavbar.Link key={link.path} href={link.path}>
            {link.name}
          </NextNavbar.Link>
        ))}
      </NextNavbar.Content>
      <NextNavbar.Content enableCursorHighlight hideIn="xs">
        {sites.map((link) => (
          <NextNavbar.Link key={link.path} href={link.path}>
            {link.name}
          </NextNavbar.Link>
        ))}
      </NextNavbar.Content>
    </NextNavbar>
  );
};

export default Navbar;
