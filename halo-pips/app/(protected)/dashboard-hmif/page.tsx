import './styles.css';
import '../../globals.css';
import spongebob from './spongebob.jpg'; // Pastikan gambar ada di folder src
import NavBar from '../../../components/navbar/navBar';
import React from 'react';
import { Poppins } from "next/font/google";
//import { useSearchParams } from 'next/navigation';

const font = Poppins({ subsets: ["latin"], weight: ["600"] });
/*
type UserProfile = {
    name: string;
    username: string;
    NIM: string;
    angkatan: string;
    status: string;
  };
  
  interface IdentityCardProps {
    id: string; // Menentukan tipe sebagai string
    anu: string;
  }
  
  const SpecificUserData: React.FC<IdentityCardProps> = ({ id }, { anu }) => {
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`/api/profile?id=${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
          const data = await response.json();
          setUserData(data);
          setLoading(false);
        } catch (error) {
          setLoading(false)
          throw new Error("Failed");
        }
      };
  
      fetchUserData();
    }, [id]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    if(anu === "name"){
        return (<p>{userData?.name}</p>);
    }else if(anu === "username"){
        return (<p>{userData?.username}</p>);
    }else{
        return (<p>{userData?.NIM}</p>);
    }

  }
*/  

const DashBoardPage = () => {
    /*
  const router = useSearchParams();
  const id = router.getAll.toString();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUserProfile = async () => {
        const response = await fetch(`/api/profile?id=${id}`);
        const data = await response.json();
        setUserProfile(data);
      };

      fetchUserProfile();
    }
  }, [id]);

  if (!userProfile) return <div>Loading...</div>;
    */
  return (
    <div>
        <NavBar className="navigation-bar"/>
        <div className={"body " + font.className}>
            <h1>Selamat Datang,</h1>
            <main>
                <div className="kiri-atas">
                    <a href="../profile/me/">
                        <div className="user">
                            <img src={spongebob.src} className="user-foto"/>

                            <div className="user-data">
                                <div>
                                    <h2>Nama Lengkap</h2>
                                    <p>
                                        John Doe
                                    </p>
                                </div>

                                <div>
                                    <h2>Nama Panggilan</h2>
                                    <p>
                                        Mamat
                                    </p>
                                </div>

                                <div>
                                    <h2>NIM</h2>
                                    <p>
                                        13599999
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>    
                    
                    <a href="../chat">
                        <button className="quick-message">Quick Message</button> 
                    </a>

                    <div className="daftar-anggota">
                        <div className="daftar-anggota-tpb">
                            <div className="daftar-anggota-foto">
                                <img src={spongebob.src}/>
                            </div>

                            <h3>Mahasiswa TPB</h3>
                        </div>

                        <div className="daftar-anggota-hmif">
                            <div className="daftar-anggota-foto">
                                <img src={spongebob.src}/>
                            </div>

                            <h3>Warga HMIF</h3>
                        </div>
                    </div>
                </div>

                <div className="kanan-bawah">
                    <div className="berita-terkini">
                        <h4 className="kosong"></h4>
                        <h4 className="isi">Berita Terkini</h4>
                    </div>

                    <div className="berita-terkini-galeri">
                        <div>
                            <img src={spongebob.src}/>

                            <h3>Berita 1</h3>

                            <p className="penjelasan-singkat">Penjelasan singkat</p>

                            <p className="tanggal-unggah">Tanggal unggah</p>

                            <button className="detail-berita">See more detail</button>
                        </div>

                        <div>
                            <img src={spongebob.src}/>

                            <h3>Berita 2</h3>

                            <p className="penjelasan-singkat">Penjelasan singkat</p>

                            <p className="tanggal-unggah">Tanggal unggah</p>

                            <button className="detail-berita">See more detail</button>
                        </div>

                        <div>
                            <img src={spongebob.src}/>

                            <h3>Berita 3</h3>

                            <p className="penjelasan-singkat">Penjelasan singkat</p>

                            <p className="tanggal-unggah">Tanggal unggah</p>

                            <button className="detail-berita">See more detail</button>
                        </div>

                        <div>
                            <img src={spongebob.src}/>

                            <h3>Berita 4</h3>

                            <p className="penjelasan-singkat">Penjelasan singkat</p>

                            <p className="tanggal-unggah">Tanggal unggah</p>

                            <button className="detail-berita">See more detail</button>
                        </div>

                        <div>
                            <img src={spongebob.src}/>

                            <h3>Berita 5</h3>

                            <p className="penjelasan-singkat">Penjelasan singkat</p>

                            <p className="tanggal-unggah">Tanggal unggah</p>

                            <button className="detail-berita">See more detail</button>
                        </div>

                        <div>
                            <img src={spongebob.src}/>

                            <h3>Berita 6</h3>

                            <p className="penjelasan-singkat">Penjelasan singkat</p>

                            <p className="tanggal-unggah">Tanggal unggah</p>

                            <button className="detail-berita">See more detail</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  );      
};  

export default DashBoardPage;