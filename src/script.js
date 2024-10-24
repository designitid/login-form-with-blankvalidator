function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const terms = document.getElementById("terms").checked;

  if (name === "") {
    alert("Masukkan Nama Anda!");
    return false;
  }
  if (email === "") {
    alert("E-Mail tidak boleh Kosong");
    return false;
  }
  if (!validateEmail(email)) {
    alert("E-Mail tidak Valid");
    return false;
  }
  if (password === "") {
    alert("Password  tidak boleh Kosong");

    return false;
  }
  if (!terms) {
    alert("Tolong Centang Peraturan dan Kondisi");
    return false;
  }
  return true;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
