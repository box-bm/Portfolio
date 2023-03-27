import { Divider, Navbar as NextNavbar, Text } from "@nextui-org/react";
import { useRef } from "react";
import socialMedia from "../../lib/data/socialMedia";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "./box";
import Link from "next/link";

const externalSites = socialMedia
  .filter(({ code }) => ["github", "blog"].includes(code))
  .map(({ name, url, icon }) => ({ name, path: url, icon }));

const sites = [
  { path: "/aboutMe", name: "About Me" },
  { path: "/skills", name: "Skills" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

const Navbar = () => {
  const { asPath } = useRouter();
  const navbarToggleRef = useRef<HTMLButtonElement>(null);

  return (
    <NextNavbar
      isBordered
      borderWeight="normal"
      variant="floating"
      css={{ position: "fixed", zIndex: 99999 }}
    >
      <NextNavbar.Brand>
        <NextNavbar.Toggle showIn="xs" ref={navbarToggleRef} />
        <Link href="/">
          <Text b h4 css={{ margin: 0, "@smMax": { marginLeft: 12 } }}>
            BoxM
          </Text>
        </Link>
      </NextNavbar.Brand>

      <NextNavbar.Content enableCursorHighlight hideIn="xs">
        {sites.map((link) => (
          <NextNavbar.Item key={link.path} isActive={link.path === asPath}>
            <Link href={link.path}>{link.name}</Link>
          </NextNavbar.Item>
        ))}
      </NextNavbar.Content>
      <NextNavbar.Content enableCursorHighlight hideIn="xs">
        {externalSites.map((link) => (
          <NextNavbar.Item key={link.path}>
            <Link href={link.path} target="_blank">
              <Box css={{ marginRight: 5 }} as="span">
                <FontAwesomeIcon icon={link.icon} />
              </Box>
              {link.name}
            </Link>
          </NextNavbar.Item>
        ))}
      </NextNavbar.Content>
      <NextNavbar.Collapse>
        {sites.map((link) => (
          <NextNavbar.CollapseItem
            key={link.path}
            isActive={link.path === asPath}
          >
            <Link href={link.path} color="inherit">
              {link.name}
            </Link>
          </NextNavbar.CollapseItem>
        ))}
        <Divider css={{ marginBottom: 10 }} />
        {externalSites.map((link) => (
          <NextNavbar.CollapseItem key={link.path}>
            <Link href={link.path} color="inherit" target="_blank">
              <Box css={{ marginRight: 5 }} as="span">
                <FontAwesomeIcon icon={link.icon} />
              </Box>
              {link.name}
            </Link>
          </NextNavbar.CollapseItem>
        ))}
      </NextNavbar.Collapse>
    </NextNavbar>
  );
};

export default Navbar;
