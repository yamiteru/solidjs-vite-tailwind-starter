import { Route } from "solid-app-router";
import { Component } from "solid-js";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App: Component = () => (
    <>
        <Navigation />
        <main><Route /></main>
        <Footer />
    </>
);

export default App;