function saklar(alamp) {
  // console.log(params);
  let lamp1 = document.getElementById("lamp1");
  let lamp2 = document.getElementById("lamp2");
  let lamp3 = document.getElementById("lamp3");
  // let toggle1 = document.getElementById("default-toggle1");
  // let toggle2 = document.getElementById("default-toggle2");
  // let toggle3 = document.getElementById("default-toggle3");
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  if (toggle1.checked) {
    lamp1.src = "../lampu/assets/image/on.png";
  } else {
    lamp1.src = "../lampu/assets/image/off.png";
  }
  if (toggle2.checked) {
    lamp2.src = "../lampu/assets/image/on.png";
  } else {
    lamp2.src = "../lampu/assets/image/off.png";
  }
  if (toggle3.checked) {
    lamp3.src = "../lampu/assets/image/on.png";
  } else {
    lamp3.src = "../lampu/assets/image/off.png";
  }
}
