2;
import { useState, useEffect, FC } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import tw from "twin.macro";
import { Button, Container } from "..";
import { useRef } from "react";
import { classes } from "../../utils";
import Image from "next/image";
import { useRouter } from "next/router";

const AppNav = styled.nav<{ scrollNavbar: boolean }>`
  background: ${({ scrollNavbar }) =>
    scrollNavbar ? "rgba(255, 255, 255, 0.8)" : "#F8FFF4"};
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 99999;
  -webkit-transform: translateZ(0px);
  /* transform: translate3d(0, 0, 0); */
  /* -webkit-transform: translate3d(0, 0, 0); */
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --tw-ring-offset-shadow: 0 0 transparent;
  box-shadow: ${({ scrollNavbar }) =>
    scrollNavbar
      ? "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      : "transparent"};
  backdrop-filter: blur(10px);
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;
const AppNavContainer = styled(Container)`
  ${tw`flex justify-between z-[1]`}
  ${Container}
`;
const AppNavLogo = styled.div`
  ${tw`flex items-center justify-self-start cursor-pointer`}
`;
const MobileIcon = styled.div`
  ${tw`hidden`}

  @media screen and (max-width: 960px) {
    ${tw`block absolute top-0 right-0 text-3xl cursor-pointer`}
    transform: translate(-100%, 60%);
  }
`;

const NavMenu = styled.ul<{ click: boolean }>`
  ${tw`flex items-center text-center`}
  list-style: none;
  margin-right: -24px;

  @media screen and (max-width: 960px) {
    ${tw`flex  flex-col w-full absolute opacity-100 bg-secondary`}
    top: 80px;
    height: 100vh;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
  }
`;
const NavItem = styled.li`
  ${tw`h-[80]`}
  border-bottom: 2px solid transparent;
  letter-spacing: 0.02em;
  font-size: 16px;
  &:hover {
    font-weight: 700;
    /* border-bottom: 2px solid green; */
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    ${tw` w-full`}
    &:hover {
      font-weight: 700;
      border: none;
    }
  }
`;
const NavLinks = styled.a`
  ${tw`text-body flex justify-center items-center `}
  padding: 0.5rem 1rem;
  height: 100%;
  &.active {
    /* border-bottom: 2px solid green; */
    border-bottom: none;
    font-weight: 900;
    @media screen and (max-width: 960px) {
      border-bottom: none;
      font-weight: 900;
    }
  }
  @media screen and (max-width: 960px) {
    ${tw`text-center table p-8 w-full`}
    &:hover {
      ${tw`font-bold cursor-pointer`}
      transition: all 0.3s ease;
    }
  }
`;

const NavItemBtn = styled.nav`
  /* ${tw` mr-10`} */
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    margin-left: 0;
    /* display: none; */
  }
`;
const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-block-end: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

type props = {
  className?: string;
};
// function Navbar({ className = "" }: props) {
function Navbar() {
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [primary, setPrimary] = useState(true);
  const [white, setWhite] = useState(true);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const appNav = useRef<any>(null);
  const router = useRouter();

  const ChangeBackground = () => {
    if (window.pageYOffset >= 80) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    console.log(scrollNavbar, "i am here");

    window.addEventListener("scroll", ChangeBackground);
    // return () => {
    //   window.removeEventListener("scroll", ChangeBackground);
    // };
  }, []);

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#3D4E4B" }}>
        <AppNav
          scrollNavbar={scrollNavbar}
          ref={appNav}
          onScroll={() => {
            console.log("Hello");
          }}
        >
          <AppNavContainer>
            <AppNavLogo
              // className={classes("navbar-logo ")}
              onClick={toggleHome}
            >
              <Link href="/">
                <Image
                  src="/svg/pkam-logo.svg"
                  alt="Pakam Logo"
                  width={120.68}
                  height={40}
                />
              </Link>
              {/* <img src="./assets/images/POS.svg" alt="logo" /> */}
            </AppNavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <Link href="/about">
                  <NavLinks
                    className={router.asPath == "/about" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    About us
                  </NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/products">
                  <NavLinks
                    className={router.asPath == "/products" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    Products
                  </NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/careers">
                  <NavLinks
                    className={router.asPath == "/careers" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/news">
                  <NavLinks
                    className={router.asPath == "/news" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    News
                  </NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/faqs">
                  <NavLinks
                    className={router.asPath == "/faqs" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    FAQs
                  </NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/reviews">
                  <NavLinks
                    className={router.asPath == "/reviews" ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    Reviews
                  </NavLinks>
                </Link>
              </NavItem>

              {button ? null : (
                <NavItemBtn>
                  <NavBtnLink href="/contactUs">
                    <Button
                      primary={primary}
                      white={white}
                      onClick={closeMobileMenu}
                    >
                      Contact Us
                    </Button>
                  </NavBtnLink>
                </NavItemBtn>
              )}
            </NavMenu>
            {button && (
              <NavItemBtn>
                <NavBtnLink href="/contactUs">
                  <Button primary={primary} white={white}>
                    Contact Us
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
            )}
          </AppNavContainer>
        </AppNav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
