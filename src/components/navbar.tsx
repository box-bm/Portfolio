import {
  Divider,
  Navbar as NextNavbar,
  Text,
  useTheme,
} from "@nextui-org/react";
import { useRef } from "react";
import socialMedia from "../../lib/data/socialMedia";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "./box";
import Link from "next/link";
import SitesProps from "../../lib/models/sitesProps";
import Image from "next/image";

type Props = SitesProps;

const Navbar = ({ externalSites, sites }: Props) => {
  const { asPath } = useRouter();
  const navbarToggleRef = useRef<HTMLButtonElement>(null);
  const theme = useTheme();

  return (
    <NextNavbar
      isBordered
      borderWeight="normal"
      variant="floating"
      css={{ position: "fixed", zIndex: 99999 }}
    >
      <NextNavbar.Brand>
        <NextNavbar.Toggle showIn="xs" ref={navbarToggleRef} />
        <Link href="/" style={{ display: "flex" }}>
          <Image
            src={theme.isDark ? "/logo_white.png" : "/logo_colour.png"}
            alt="Box-Dev logo"
            width={60}
            height={60}
          />
          <Text b h4 css={{ margin: 12 }}>
            Box Dev
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
              {link.icon && (
                <Box css={{ marginRight: 5 }} as="span">
                  <FontAwesomeIcon icon={link.icon} />
                </Box>
              )}
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
            <Link href={link.path} target="_blank">
              {link.icon && (
                <Box css={{ marginRight: 5 }} as="span">
                  <FontAwesomeIcon icon={link.icon} />
                </Box>
              )}
              {link.name}
            </Link>
          </NextNavbar.CollapseItem>
        ))}
      </NextNavbar.Collapse>
    </NextNavbar>
  );
};

export default Navbar;
