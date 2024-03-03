import Layout from "../components/Layout";
import FormTambahBarang from "./FormTambahBarang";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PaginateComponent from "../components/Paginate&Search";
import EditBarang from "../pages/Edit/EditBarang";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DataBarang = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showEditBarangPopup, setShowEditBarangPopup] = useState(false);

  const handleTambahBarangClick = () => {
    setShowPopup(true);
  };

  const handleEditBarangClick = () => {
    setShowEditBarangPopup(true);
  };

  const handleCloseForm = () => {
    setShowPopup(false);
  };

  const handleCloseEditForm = () => {
    setShowEditBarangPopup(false);
  };

  const navigate = useNavigate();

  const handlehapusbarang = () => {
    // Menampilkan pesan toast
    toast.success("yeay! data barang berhasil dihapus", {
      position: "top-center",
      duration: 4000,
    });

    // Mengarahkan pengguna ke halaman landing page
    navigate('/databarang');
  };

  return (
    <Layout>
      <style>
        {`
          /* CSS untuk mengatur gaya h1 */
          .title {
            margin-top: 0.8rem;
            // font-weight: bold; /* Seharusnya bold, bukan semibold */
            color: #333;
            margin-bottom: 1rem;
            padding-left: 10px;
            display: flex;
            align-items: center;
            font-family: 'Poppins', sans-serif;
          }

          .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 10px;
          }
          .table {
            width: 97%;
            border-collapse: collapse;
            margin-top: 10px;
          }
  
          th,
          td {
            padding: 12px 20px;
            border: 1px solid #ddd;
            font-size: 0.8rem;
            font-family: 'Poppins', sans-serif;
          }
  
          th {
            background-color: #f2f2f2;
            font-weight: bold;
          }
          tbody tr {
            border-bottom: none;
          }
        `}
      </style>
      <div className="flex-container">
        <h1 className="title">Data Barang</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2"
          onClick={handleTambahBarangClick}
        >
          Tambah
        </button>
      </div>
      {showPopup && <FormTambahBarang onClose={handleCloseForm} />}
      {showEditBarangPopup && <EditBarang onClose={handleCloseEditForm} />}
      <>
        <PaginateComponent />
      </>
      <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem',}}>No</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Nama Barang</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Merk</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Ruang</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">1</td>
            <td className="p-3">laptop</td>
            <td className="p-3">lenovo</td>
            <td className="p-3">ruang lab pplg</td>
            <td className="p-3"  style={{ display: 'flex', justifyContent: 'center', }}>
            <Link to="/detaildatabarang" className="text-gray-500 hover:text-gray-100 mr-3">
              <FaEye className="text-base" style={{ display: 'inline-block' }} />
            </Link>
              <a href="#" className="text-blue-500 hover:text-gray-100 mx-3">
              <HiPencil className="text-base" style={{ display: 'inline-block' }}  onClick={handleEditBarangClick}/>
              </a>
              <div className="text-red-500 hover:text-gray-100 ml-3" onClick={handlehapusbarang}>
              <MdDelete  className="text-base" style={{ display: 'inline-block' }} />
              </div>
            </td>
          </tr>
       <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">2</td>
            <td className="p-3">laptop</td>
            <td className="p-3">lenovo</td>
            <td className="p-3">ruang lab pplg</td>
            <td className="p-3"  style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/detaildatabarang" className="text-gray-500 hover:text-gray-100 mr-3">
              <FaEye className="text-base" style={{ display: 'inline-block' }} />
            </Link>
              <a href="#" className="text-blue-500 hover:text-gray-100 mx-3">
              <HiPencil className="text-base" style={{ display: 'inline-block' }} onClick={handleEditBarangClick} />
              </a>
              <div className="text-red-500 hover:text-gray-100 ml-3" onClick={handlehapusbarang}>
              <MdDelete  className="text-base" style={{ display: 'inline-block' }} />
              </div>
            </td>
          </tr>
             <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">3</td>
            <td className="p-3">laptop</td>
            <td className="p-3">lenovo</td>
            <td className="p-3">ruang lab pplg</td>
            <td className="p-3"  style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/detaildatabarang" className="text-gray-500 hover:text-gray-100 mr-3">
              <FaEye className="text-base" style={{ display: 'inline-block' }} />
            </Link>
              <a href="#" className="text-blue-500 hover:text-gray-100 mx-3">
              <HiPencil className="text-base" style={{ display: 'inline-block' }} onClick={handleEditBarangClick} />
              </a>
              <div
                className="text-red-500 hover:text-gray-100 ml-3" onClick={handlehapusbarang}>
              <MdDelete  className="text-base" style={{ display: 'inline-block' }} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default DataBarang;
