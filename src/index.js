import jsPDF from "jspdf";

const doc = new jsPDF();
const source = document.getElementById("convert-me");
const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  doc.html(source, { callback: (doc) => doc.save() });
});
