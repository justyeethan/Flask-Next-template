"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import navLinks from "./baseURLs";

type NavigationLinks = {
  activeLink: string
}

/**
 * Navigation Component to load and run the links
 * @param activeLink - The current active link
 */
const Navigation = ({activeLink}: NavigationLinks) => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">Flask Next Template</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks?.map((nav) => {
          if (nav.name === activeLink) {
            return (
              <NavbarItem key={nav.name} isActive>
                <Link href={nav.link}>{nav.name}</Link>
              </NavbarItem>
            );
          }
          return (
            <NavbarItem key={nav.name}>
              <Link color="foreground" href={nav.link}>{nav.name}</Link>
            </NavbarItem>

          )
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
