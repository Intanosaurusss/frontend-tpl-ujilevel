import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './pages/LoginPage';
import DashboardAdmin from "./pages/DashboardAdmin";
import DaftarPage from "./pages/DaftarPage";
import DataBarang from "./pages/DataBarangPage";
import DataServis from "./pages/DataServis";
import DataRuang from "./pages/DataRuang";
import DataUser from "./pages/DataUser";
import DataPeminjaman from "./pages/DataPeminjaman";
import RiwayatPeminjaman from "./pages/RiwayatPeminjaman";
import FormTambahBarang from "./pages/FormTambahBarang";
import FormTambahRuang from "./pages/FormTambahRuang";
import DetailDataBarang from "./pages/DetailDataBarang";
import FormTambahPeminjaman from "./pages/FormTambahPeminjaman";
import EditBarang from "./pages/Edit/EditBarang";
import EditRuang from "./pages/Edit/EditRuang";
import EditServis from "./pages/Edit/EditServis";
import Profil from "./pages/Profil";
import { Toaster } from "react-hot-toast";
import DashboardUser from "./pages user/DashboardUser";
import DataPeminjamanUser from "./pages user/DataPeminjamanUser";
import RiwayatPeminjamanUser from "./pages user/RiwayatPeminjamanUser";
import ProfilUser from "./pages user/ProfilUser";
import DetailDataBarangUser from "./pages user/DetailDataBarangUser";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/Login" Component={LoginPage} />
      <Route path="/Daftar" Component={DaftarPage} />
      <Route path="/Dashboard" Component={DashboardAdmin} />
      <Route path="/Databarang" Component={DataBarang} />
      <Route path="/Dataservis" Component={DataServis} />
      <Route path="/Dataruang" Component={DataRuang} />
      <Route path="/Datauser" Component={DataUser} />
      <Route path="/Datapeminjaman" Component={DataPeminjaman} />
      <Route path="/Riwayatpeminjaman" Component={RiwayatPeminjaman} />
      <Route path="/Detaildatabarang" Component={DetailDataBarang} />
      <Route path="/Formtambahbarang" Component={FormTambahBarang} />
      <Route path="/Formtambahruang" Component={FormTambahRuang} />
      <Route path="/Formtambahpeminjaman" Component={FormTambahPeminjaman} />
      <Route path="/Editbarang" Component={EditBarang} />
      <Route path="/Editruang" Component={EditRuang} />
      <Route path="/Editservis" Component={EditServis} />
      <Route path="/Profil" Component={Profil} />
      <Route path="/Dashboarduser" Component={DashboardUser} />
      <Route path="/Datapeminjamanuser" Component={DataPeminjamanUser} />
      <Route path="/Riwayatpeminjamanuser" Component={RiwayatPeminjamanUser} />
      <Route path="/Profiluser" Component={ProfilUser} />
      <Route path="/Detaildatabaranguser" Component={DetailDataBarangUser} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App; 