import React from "react";
import { Link, useRoute } from "wouter";
import styled from "styled-components";

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);

  return (
    <Link
      {...props}
      className={isActive ? "active" : ""}
      aria-current={isActive ? "page" : false}
    >
      {props.children}
    </Link>
  );
};

export default function Nav() {
  return (
    <Sidebar>
      <SiteTitle>Website</SiteTitle>
      <NavContainer>
        <ul>
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/contact">Contact</ActiveLink>
          </li>
        </ul>
      </NavContainer>
    </Sidebar>
  );
}

const Sidebar = styled.aside`
  background: white;
`;

const SiteTitle = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.05rem;
  background: #263238;
  color: white;
  padding: 3rem 1rem;
`;

const NavContainer = styled.nav`
  padding: 1rem;
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    a {
      display: block;
      padding-block: 0.3rem;
      text-decoration: none;
      transition: 0.2s;
      position: relative;
      &[aria-current="page"] {
        background: #455a64;
        color: white;
        padding-inline: 0.6rem;
        inline-size: 100%;
        &::after {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: calc(100% - 1px);
          block-size: 100%;
          inline-size: 10px;
          background: #455a64;
          clip-path: polygon(100% 50%, 0 0, 0 100%);
        }
      }
    }
  }
`;
