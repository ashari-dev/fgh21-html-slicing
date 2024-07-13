const sidebar = document.getElementById("sidebar");
async function loadSidebar() {
  const response = await fetch("./assets/component/sidebar.html");
  const data = await response.text();
  sidebar.innerHTML = data;
}
loadSidebar();
