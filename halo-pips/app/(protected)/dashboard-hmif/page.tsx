import './styles.css';
import '../../globals.css';
import spongebob from './spongebob.jpg'; // Pastikan gambar ada di folder src
import NavBar from '../../../components/navbar/navBar';
import React from 'react';

const DashBoardPage = () => {
  return (
    <div>
        <NavBar/>
        <div className='body'>
            <h1>Selamat Datang,</h1>
            <main>
                <div className="kiri-atas">
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

                    <button className="quick-message">Quick Message</button>

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