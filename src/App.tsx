import { useRoutes } from "solid-app-router";
import { Component } from "solid-js";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { routes } from "./routes";

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <>
      <Navigation />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
