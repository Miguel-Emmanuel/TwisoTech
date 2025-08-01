import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PaginaServicios from "./pages/Servicios";
import PaginaMision from "./pages/Mision";
import PaginaVision from "./pages/Vision";
import PaginaValores from "./pages/Valores";
import PaginaProyectos from "./pages/Proyectos";
import PaginaContacto from "./pages/Contacto";
import ProyectoMonitoreoRemoto from "./pages/ProyectoMonitoreoRemoto";
import ServicioSoporte from "./pages/ServicioSoporte";
import ServicioDesarrolloWeb from "./pages/ServicioDesarrolloWeb";
import ServicioSistemasEmpresariales from "./pages/ServicioSistemasEmpresariales";
import ServicioCamaras from "./pages/ServicioCamaras";
import ServicioRedes from "./pages/ServicioRedes";
import ProyectoSistemaEscolar from "./pages/ProyectoSistemaEscolar";
import ProyectoSitioPyme from "./pages/ProyectoSitioPyme";
import ProyectoCinvestavEical from "./pages/ProyectoCinvestavEical";
import ProyectoSoporteLaboratorio from "./pages/ProyectoSoporteLaboratorio";
import ProyectoSitioConstructora from "./pages/ProyectoSitioConstructora";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>TwisoTech</title>
        <meta name="description" content="Soluciones inteligentes para un mundo digital." />
        <link rel="icon" type="image/png" href="/logo-3d.png" />
      </Helmet>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<PaginaServicios />} />
            <Route path="/mision" element={<PaginaMision />} />
            <Route path="/vision" element={<PaginaVision />} />
            <Route path="/valores" element={<PaginaValores />} />
            <Route path="/proyectos" element={<PaginaProyectos />} />
            <Route path="/contacto" element={<PaginaContacto />} />
            <Route path="/proyecto-monitoreo-remoto" element={<ProyectoMonitoreoRemoto />} />
            <Route path="/servicio-soporte" element={<ServicioSoporte />} />
            <Route path="/servicio-desarrollo-web" element={<ServicioDesarrolloWeb />} />
            <Route path="/servicio-sistemas-empresariales" element={<ServicioSistemasEmpresariales />} />
            <Route path="/servicio-camaras" element={<ServicioCamaras />} />
            <Route path="/servicio-redes" element={<ServicioRedes />} />
            <Route path="/proyecto-sistema-escolar" element={<ProyectoSistemaEscolar />} />
            <Route path="/proyecto-sitio-pyme" element={<ProyectoSitioPyme />} />
            <Route path="/proyecto-cinvestav-eical" element={<ProyectoCinvestavEical />} />
            <Route path="/proyecto-soporte-laboratorio" element={<ProyectoSoporteLaboratorio />} />
            <Route path="/proyecto-sitio-constructora" element={<ProyectoSitioConstructora />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
