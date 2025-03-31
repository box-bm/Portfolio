import {
  Divider,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as HeroNavbar,
} from "@heroui/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "./box";
import Link from "next/link";
import SitesProps from "../../lib/models/sitesProps";

type Props = SitesProps;

const Navbar = ({ externalSites, sites }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { asPath } = useRouter();
  const navbarToggleRef = useRef<HTMLButtonElement>(null);


  return (
    <HeroNavbar
      position="static"
      className="space-y-4"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarBrand>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            // src={theme.isDark ? "/logo_white.png" : "/logo_colour.png"}
            src={"/logo_colour.png"}
            alt="Box-Dev logo"
            width={60}
            height={60}
          />
          <h1 className="text-lg font-bold my-3">
            Box Dev
          </h1>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center" className="hidden sm:flex gap-4">
        {sites.map((link) => (
          <NavbarItem key={link.path} isActive={link.path === asPath}>
            <Link href={link.path}>{link.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex gap-4">
        {externalSites.map((link) => (
          <NavbarItem key={link.path} >
            <Link href={link.path} target="_blank" style={{ display: "flex", flexDirection: 'row', alignItems: "center" }}>
              {link.icon && (
                <Box css={{ marginRight: 5 }} as="span">
                  <FontAwesomeIcon icon={link.icon} />
                </Box>
              )}
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {sites.map((link) => (
          <NavbarMenuItem
            key={link.path}
            isActive={link.path === asPath}
          >
            <Link href={link.path} color="inherit">
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider className="border-b border-gray-300 mb-2" />
        {externalSites.map((link) => (
          <NavbarMenuItem key={link.path}>
            <Link href={link.path} target="_blank" style={{ display: "flex", flexDirection: 'row', alignItems: "center" }}>
              {link.icon && (
                <Box css={{ marginRight: 5 }} as="span">
                  <FontAwesomeIcon icon={link.icon} />
                </Box>
              )}
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};

export default Navbar;
