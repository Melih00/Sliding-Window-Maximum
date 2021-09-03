function SlidingWindowMaximum(array = [], k = 0) {
  finalList = [];
  for (i = 0; i < array.length - (k - 1); i++) {
    let newList = [];
    let max = 0;
    for (y = i; y < (i + k <= array.length ? i + k : array.length); y++) {
      max = max > array[y] ? max : array[y];
    }
    finalList.push(max);
  }
  return finalList;
}
let listlistlist = [];
let K = 0;
document.getElementById("CLEAR").style.visibility = "hidden";
document.getElementById("inp").addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && document.getElementById("inp").value) {
    event.preventDefault();
    document.getElementById("arr").innerText +=
      document.getElementById("inp").value + ", ";
    listlistlist.push(Number(document.getElementById("inp").value));
    document.getElementById("inp").value = "";
  }
});
document.getElementById("k_input").addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && document.getElementById("k_input").value) {
    event.preventDefault();
    document.getElementById("k_span").innerText =
      document.getElementById("k_input").value;
    K = Number(document.getElementById("k_input").value);
    document.getElementById("k_input").value = "";
  }
});
document.getElementById("GO").addEventListener("click", () => {
  if (listlistlist && K) {
    document.getElementById("result").innerText = "[ " + `${SlidingWindowMaximum(listlistlist, K)}` + " ]";
    listlistlist = [];
    K = 0;
    document.getElementById("inp").disabled = true;
    document.getElementById("k_input").disabled = true;
    document.getElementById("CLEAR").style.visibility = "visible";
  } else {
    document.getElementById("result").innerText =
      "Array veya K değeri boş bırakılamaz !";
  }
});
document
  .getElementById("CLEAR")
  .addEventListener("click", () => window.location.reload());
