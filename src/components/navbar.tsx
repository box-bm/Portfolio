import { Link, Navbar as NextNavbar, Text } from "@nextui-org/react";
import { useRef } from "react";

const sites = [
  { path: "/skills", name: "Skills" },
  { path: "/contact", name: "Contact" },
  { path: "/projects", name: "Projects" },
  { path: "/aboutMe", name: "About Me" },
  { path: "/blog", name: "Blog" },
];

const Navbar = () => {
  const navbarToggleRef = useRef<HTMLButtonElement>(null);

  return (
    <NextNavbar isBordered borderWeight="normal" variant="floating" css={{position: "fixed"}}>
      <NextNavbar.Brand>
        <NextNavbar.Toggle showIn="xs" ref={navbarToggleRef} />
        <Text b h4 css={{ margin: 0, "@smMax": { marginLeft: 12 } }}>
          BoxM
        </Text>
      </NextNavbar.Brand>

      <NextNavbar.Content enableCursorHighlight hideIn="xs">
        {sites.map((link) => (
          <NextNavbar.Link key={link.path} href={link.path}>
            {link.name}
          </NextNavbar.Link>
        ))}
      </NextNavbar.Content>
      <NextNavbar.Collapse>
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
