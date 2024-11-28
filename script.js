const daftarTugas = [
]

let mode = 'tambah'

const tampilkanTugas = () => {
    const tabelTugas = document.getElementById('tabelTugas')
    tabelTugas.innerHTML = <tr><th>No</th><th>Nama Tugas</th><th>Deadline</th><th>Prioritas</th><th>Edit Tugas</th><th>Selesai</th></tr>

    for (let index in daftarTugas) {
        console.log(${parseInt(index) + 1}.${daftarTugas[index].namaTugas} dengan deadline tanggal ${daftarTugas[index].deadline} memiliki prioritas ${daftarTugas[index].prioritas}.)

        tabelTugas.innerHTML += <tr><td>${parseInt(index) + 1}.</td><td>${daftarTugas[index].namaTugas}</td><td>${daftarTugas[index].deadline}</td><td>${daftarTugas[index].prioritas}</td><td><button class="btn btn-warning" onclick = "editTugas('${daftarTugas[index].namaTugas}')">Edit</button></td><td><input type ="checkbox" onclick = "selesai('${daftarTugas[index].namaTugas}')"></td></tr>
    }
}


let tambahTugas = () => {
    const namaTugas = document.getElementById('txtnamaTugas').value
    const deadline = document.getElementById('txtdeadline').value
    const prioritas = document.getElementById('txtprioritas').value

    const tugasBaru = {
        namaTugas: namaTugas,
        deadline: deadline,
        prioritas: prioritas,

    }

    if (mode == 'tambah') {
        daftarTugas.push(tugasBaru)
    } else {
        daftarTugas[mode] = tugasBaru
    }
    
    document.getElementById('txtnamaTugas').value = ""
    document.getElementById('txtdeadline').value = ""
    document.getElementById('txtprioritas').value = ""

    mode = 'tambah'

    tampilkanTugas()

    }

    const cariTugas = (namaTugas) => {
        // tampilkan index jika nama karyawan === nama
        for (let i = 0; i < daftarTugas.length; i++) {
            if (daftarTugas[i].namaTugas == namaTugas)
               return i
        }
        return -1
    }

    const editTugas = (target) => {   
        const tugasEdit = cariTugas(target);
        const tugasDiedit = daftarTugas[tugasEdit];
    
        const namaTugas = document.getElementById('txtnamaTugas').value = target
        const deadline = document.getElementById('txtdeadline').value = tugasDiedit.deadline
        const prioritas = document.getElementById('txtprioritas').value = tugasDiedit.prioritas
    
        mode = tugasEdit

        console.log(target)
        console.log(tugasEdit)
        console.log(daftarTugas[tugasEdit])
    }

    const cancel = (target) => {
        const namaTugas = document.getElementById('txtnamaTugas').value = ""
        const deadline = document.getElementById('txtdeadline').value = ""
        const prioritas = document.getElementById('txtprioritas').value = ""
        mode = 'tambah'
    }