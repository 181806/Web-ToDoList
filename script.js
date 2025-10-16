// daftar.innerHTML.localStorage.getitem("dataKegiatan")||("")

//ambil elemen
const itemForm = document.getElementById("itemForm")
const itemInput = document.getElementById("itemInput")
const errorMessage = document.getElementById("errorMessage")
const daftar = document.getElementById("daftar").querySelector ("tbody")

let no = 1

//event listener
itemForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputValue = itemInput.value

    if(inputValue === ""){
        errorMessage.textContent = "Field tidak boleh kosong."
        itemInput.classList.add ('invalid')
        itemInput.classList.remove ('valid')  
    } else{
     errorMessage.textContent = ""
        itemInput.classList.add ('valid')  
        itemInput.classList.remove ('invalid')
        
        const baris = document.createElement ("tr")

        const kolomno = document.createElement("td")
        kolomno.textContent = no++;

        const kolomKegiatan = document.createElement ('td')
        kolomKegiatan.textContent = inputValue;

        const KolomStatus = document.createElement ("td")
        const selesai = document.createElement ("button")
        selesai.textContent = 'done bro!';
        selesai.classList.add("done-btn")
        selesai.addEventListener("click", function(event){
            kolomKegiatan.style.textDecoration = 'line-through';
        })

        
        KolomStatus.appendChild(selesai)

        const kolomHapus = document.createElement("td")
        const hapus = document.createElement("button")
        hapus.textContent = "hapus!";
        hapus.classList.add("hapus.btn")
        hapus.addEventListener("click", function(event){
            baris.remove();
        })
        kolomHapus.appendChild(hapus)

        const kolomEdit = document.createElement("td")
        const edit = document.createElement ("button")
        edit.textContent = "edit plan"
        edit.classList.add("edit.btn")
        edit.addEventListener("click", function(event){
            kolomKegiatan.contentEditable = true;
            kolomKegiatan.focus()

            edit.textContent = "save"
            edit.classList.add ("save-btn")

            edit.addEventListener("click", function(event) {
                kolomKegiatan.contentEditable = false
                edit.textContent = "edit plan"
                edit.classList.remove ("save-btn")
            })
        })
        kolomEdit.appendChild(edit)

        baris.appendChild(kolomno)
        baris.appendChild(kolomKegiatan)
        baris.appendChild(KolomStatus)
        baris.appendChild(kolomEdit)
        baris.appendChild(kolomHapus)

        daftar.appendChild(baris)

        itemInput.value = "";
        

        
    }
})
