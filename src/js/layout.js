import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { VistaPrincipal } from "./views/vista_principal";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//conectando con la view de la vista de un solo elemento
import {UnPersonaje} from "./views/un_personaje"
import {UnPlaneta} from "./views/un_planeta"
import {UnVehiculo} from "./views/un_vehiculo"


//create your first component
const Layout = () => {
    // the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<VistaPrincipal />} />
                        {/* conectando la ruta de cada boton con cada view de un elemento :')' */}
                        <Route path="/personaje" element={<UnPersonaje/>}/>
                        <Route path="/planeta" element={<UnPlaneta/>}/>
                        <Route path="/vehiculo" element={<UnVehiculo/>}/>
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
