function saklar(lamp) {
  let lamp1 = document.getElementById("lamp1");
  let lamp2 = document.getElementById("lamp2");
  let lamp3 = document.getElementById("lamp3");
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  console.log(toggle1)
  let toggle3 = document.getElementById("default-toggle3");

  if (toggle1.checked) {
    lamp1.src = "./assets/image/on.png";
  } else {
    lamp1.src = "./assets/image/off.png";
  }
  if (toggle2.checked) {
    lamp2.src = "./assets/image/on.png";
  } else {
    lamp2.src = "./assets/image/off.png";
  }
  if (toggle3.checked) {
    lamp3.src = "./assets/image/on.png";
  } else {
    lamp3.src = "./assets/image/off.png";
  }
}

function rmakan(a){
  let lamprm = document.getElementById("lamprm");
  let lamprm1 = document.getElementById("default-lamprm1");
  if (lamprm1.checked) {
    lamprm.src = "./assets/image/on.png";
  } else {
    lamprm.src = "./assets/image/off.png";
  }
}

function rtidur(tidur){
  let lamprt1 = document.getElementById("lamprt1");
  let lamprt2= document.getElementById("lamprt2");
  let togglert1 = document.getElementById("default-togglert1");
  let togglert2 = document.getElementById("default-togglert2")


  if (togglert1.checked) {
    lamprt1.src = "./assets/image/on.png";
  } else {
    lamprt1.src = "./assets/image/off.png";
  }
  if (togglert2.checked) {
    lamprt2.src = "./assets/image/on.png";
  } else {
    lamprt2.src = "./assets/image/off.png";
  }
}


function rtamu(tamu){
  let lamprtamu1 = document.getElementById("lamprtamu1");
  let lamprtamu2= document.getElementById("lamprtamu2");
  let lamprtamu3= document.getElementById("lamprtamu3");
  let lamprtamu4= document.getElementById("lamprtamu4");
  let togglertamu1 = document.getElementById("default-togglertamu1");
  let togglertamu2 = document.getElementById("default-togglertamu2")
  let togglertamu3 = document.getElementById("default-togglertamu3")
  let togglertamu4 = document.getElementById("default-togglertamu4")


  if (togglertamu1.checked) {
    lamprtamu1.src = "./assets/image/on.png";
  } else {
    lamprtamu1.src = "./assets/image/off.png";
  }
  if (togglertamu2.checked) {
    lamprtamu2.src = "./assets/image/on.png";
  } else {
    lamprtamu2.src = "./assets/image/off.png";
  }
  if (togglertamu3.checked) {
    lamprtamu3.src = "./assets/image/on.png";
  } else {
    lamprtamu3.src = "./assets/image/off.png";
  }
  if (togglertamu4.checked) {
    lamprtamu4.src = "./assets/image/on.png";
  } else {
    lamprtamu4.src = "./assets/image/off.png";
  }
}
