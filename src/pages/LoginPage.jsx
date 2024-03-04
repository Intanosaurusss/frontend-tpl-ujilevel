import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false); // State untuk menunjukkan status sedang login

  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah default behavior form
    setIsLoggingIn(true); // Set status sedang login menjadi true

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password
      });

      if (response.data.success) {
        const userData = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          roles: response.data.roles,
          permissions: response.data.permissions
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('token', response.data.token);

        toast.success("Login Berhasil!", {
          position: "top-center",
          duration: 4000,
        });

        if (userData.roles.includes('admin')) {
          navigate('/dashboard');
        } else {
          navigate('/Dashboarduser');
        }
      } else {
        toast.error("Login Gagal. Periksa kembali email dan password Anda.", {
          position: "top-center",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("Login Gagal. Terjadi kesalahan pada server.", error);
      toast.error("Login Gagal. Terjadi kesalahan pada server.", {
        position: "top-center",
        duration: 4000,
      });
    } finally {
      setIsLoggingIn(false); // Set status sedang login kembali ke false setelah selesai
    }
  };

  return (
    <div className="grid h-screen w-full">
      <div className="bg-gradient-to-br from-blue-300 to-blue-800 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gradient-to-br from-blue-250 to-blue-800 p-8 px-8" onSubmit={handleLogin}>
          <h2 className="text-4xl dark:text-white font-bold text-center">Login</h2>
          <div className="flex flex-col text-dark py-2">
            <label>Email</label>
            <input className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex flex-col text-dark 400 py-2">
            <label>Password</label>
            <input className="p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="w-full my-4 py-2 bg-blue-900 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg" type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? 'Sedang Login...' : 'Login'}
          </button>
          <p>
            belum punya akun? daftar{' '}
            <Link to="/Daftar" className="text-blue-300">
              disini
            </Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;