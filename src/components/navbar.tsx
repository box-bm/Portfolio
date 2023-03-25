import { Divider, Link, Navbar as NextNavbar, Text } from "@nextui-org/react";

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
  return (
    <NextNavbar variant="sticky" shouldHideOnScroll isBordered>
      <NextNavbar.Toggle showIn="xs" />
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
        <Divider />
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
    </NextNavbar>
  );
};

export default Navbar;
