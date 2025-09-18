function pindah(no) {
    if (no === 4) {
      // Ambil data dari halaman 1 (pendaftaran)
      const halaman1 = document.getElementById('halaman1');
      const inputs1 = halaman1.querySelectorAll('input');
      const dataPendaftaran = {
        nama: inputs1[0].value.trim(),
        umur: inputs1[1].value.trim(),
        jenisKelamin: inputs1[2].value.trim(),
        email: inputs1[3].value.trim(),
        nisn: inputs1[4].value.trim(),
        asalSekolah: inputs1[5].value.trim(),
      };
  
      // Ambil data dari halaman 2 (login)
      const halaman2 = document.getElementById('halaman2');
      const inputs2 = halaman2.querySelectorAll('input');
      const dataLogin = {
        username: inputs2[0].value.trim(),
        password: inputs2[1].value.trim(),
      };
  
      // Ambil data dari halaman 3 (pilihan sekolah)
      const sekolahRadio = document.querySelector('input[name="sekolah"]:checked');
      const dataSekolah = sekolahRadio ? sekolahRadio.parentElement.textContent.trim() : '';
  
      // Validasi sederhana (bisa dikembangkan)
      if (!dataPendaftaran.nama || !dataLogin.username || !dataSekolah) {
        alert('Mohon lengkapi data pendaftaran, login, dan pilih sekolah sebelum menyimpan.');
        return;
      }
  
      // Gabungkan data
      const dataLengkap = {
        ...dataPendaftaran,
        ...dataLogin,
        sekolah: dataSekolah,
      };
  
      // Simpan ke localStorage (array data)
      let dataList = JSON.parse(localStorage.getItem('dataPendaftaranList')) || [];
      dataList.push(dataLengkap);
      localStorage.setItem('dataPendaftaranList', JSON.stringify(dataList));
  
      // Arahkan ke halaman data
      window.location.href = 'data.html';
      return;
    }
  
    // Jika bukan save, pindah halaman biasa
    document.querySelectorAll('.halaman').forEach(div => div.classList.remove('aktif'));
    document.getElementById('halaman' + no).classList.add('aktif');
  }