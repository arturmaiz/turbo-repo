import * as React from "react";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
import {
  Header,
  AppShell as MaintineAppShell,
  Title,
  MantineProvider,
  Navbar,
} from "@mantine/core";

// component exports
export { Card } from "./card";

interface AppShellProps {
  title?: string;
  colorScheme?: "light" | "dark";
  routes: Route[];
  navLinks: NavLink[];
}

export interface Route {
  element: React.FunctionComponent;
  path: string;
}

export interface NavLink {
  label: string;
  path: string;
}

function AppShell({
  title = "",
  colorScheme,
  routes,
  navLinks,
}: AppShellProps): React.ReactElement {
  return (
    <BrowserRouter>
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <MaintineAppShell
          header={
            <Header
              height={60}
              p="xs"
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}
              sx={{ display: "flex" }}
            >
              <Title>{title}</Title>
            </Header>
          }
          navbar={
            <Navbar height={500} p="xs" width={{ base: 300 }}>
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} {...link}>
                  {link.label}
                </Link>
              ))}
            </Navbar>
          }
          padding="md"
        >
          <Routes>
            {routes.map((route) => (
              <Route
                element={<route.element />}
                key={route.path}
                path={route.path}
              />
            ))}
          </Routes>
          <Outlet />
        </MaintineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
}

export { AppShell };
