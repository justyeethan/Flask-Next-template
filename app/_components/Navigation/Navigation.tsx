"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react";
import navLinks from "./baseURLs";
import { useState } from "react";

type NavigationLinks = {
  activeLink: string;
};

/**
 * Navigation Component to load and run the links
 * @param activeLink - The current active link
 */
const Navigation = ({ activeLink }: NavigationLinks) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Flask/React Template</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Flask/React Template</p>
        </NavbarBrand>
        {navLinks.map((item) => {
          if (activeLink === item.name) {
            return (
              <NavbarItem isActive>
                <Link href={item.link}>{item.name}</Link>
              </NavbarItem>
            );
          }
          return (
            <NavbarItem>
              <Link color="foreground" href={item.link}>
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((item) => {
          if (item.name === activeLink) {
            return (
              <NavbarMenuItem isActive key={`${item.name}`}>
                <Link className="w-full" href={item.link} size="lg">
                  {item.name}
                </Link>
              </NavbarMenuItem>
            );
          }
          return (
            <NavbarMenuItem key={`${item.name}`}>
              <Link
                color="foreground"
                className="w-full"
                href={item.link}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
