function tampilcek(){
    let cek = document.getElementById("web").checked
    let cek2 = document.getElementById("dekstop").checked
    if (cek){
        document.getElementById("dekstop").checked = false
        document.getElementById("tampil").innerHTML="<option value='HTML'>Html</option> <option value='JAVASCRIPT'>Javascript</option> <option value='LARAVEL'>Laravel</option><option value='CODEIGNETER'>Codeigneter</option>";
        
    }else if (cek2){
        
        document.getElementById("tampil").innerHTML="<option value='VISUALBASIC'>Visual Basic</option><option value='C'>Bahasa C</option><option value='JAVA'>Java</option>";
    }
}
  function submitdata(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let no = document.getElementById('no').value
    let kate = document.getElementById('tampil').value
    let emailReceiver = 'diemasibna3@gmail.com';
    let a = document.createElement('a') 
        a.href = `mailto: ${emailReceiver}?subject=pembuatan aplikasi berbahasa ${kate}&body=Hallo nama saya ${name} saya memerlukan anda untuk membuat aplikasi berbahasa ${kate} saya harap anda segera menghubungi saya ke :  ${no} ${email}`
        a.click()
    let dataObject = {
        name: name,
        email: email,
        no: no
    }
  }

