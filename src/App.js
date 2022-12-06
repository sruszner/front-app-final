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
import Login from './components/Login'
import Signup from './components/Signup'
import Forgot from './components/Forgot'
import ResetPass from './components/ResetPass'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

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
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="resetpass/:resetToken" element={<ResetPass />} />
      </Routes>
      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;
