import React from "react";
import ReactDOM from "react-dom/client";
import { Redirect, Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import styled from "styled-components";

import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Nav from "./components/Nav/Nav.js";

function App() {
  return (
    <Router hook={useHashLocation}>
      <Route path="~/" children={<Redirect to="/" />} />

      <PageContainer>
        <Nav />

        <main>
          <Switch>
            <Route path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/:anything*">
              <center>
                <b>404:</b> Sorry, this page isn't ready yet!
              </center>
            </Route>
          </Switch>
        </main>
      </PageContainer>
    </Router>
  );
}

const PageContainer = styled.div`
  min-block-size: 100dvh;
  display: grid;
  grid-template-columns: 200px 1fr;
  max-inline-size: 80ch;
`;

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);
