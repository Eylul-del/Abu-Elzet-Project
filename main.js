window.showNavList = function () {
  const sidebar = document.getElementById("sideBar");
  if (sidebar) sidebar.classList.toggle("active");
};

window.hideBar = function () {
  const sidebar = document.getElementById("sideBar");
  if (sidebar) sidebar.classList.remove("active");
};
