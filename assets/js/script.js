const footer = document.getElementById("footer");
async function fetchFooter() {
  const response = await fetch("./component/footer.html");
  const data = await response.text();
  footer.innerHTML = data;
}
fetchFooter();
