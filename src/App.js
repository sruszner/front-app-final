import { Routes, Route } from "react-router-dom";

import Circuit from './components/Circuit'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Region from './components/Region'
import Formula from './components/Formula'
import Gt3 from './components/Gt3'
import Lmp1 from './components/Lmp1'
import ErrorPage from './components/ErrorPage'
import Views from './components/Views'


function App() {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={<Circuit />} />
        <Route path="contact" element={<Contact />} />
        <Route path="region" element={<Region />} />
        <Route path="formula" element={<Formula />} />
        <Route path="gt3" element={<Gt3 />} />
        <Route path="lmp1" element={<Lmp1 />} />
        <Route path="404error" element={<ErrorPage />} />
        <Route path="region" element={<Region />} />
        <Route path="views" element={<Views />} />
      </Routes>
      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
