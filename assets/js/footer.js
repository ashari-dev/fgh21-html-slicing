
async function loadFooter() {
  const response = await fetch("./assets/component/footer.html");
  const data = await response.text();
  footer.innerHTML = data;
}
loadFooter();