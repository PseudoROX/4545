function showLinks() {
  document.getElementById("links").setAttribute('style', 'display:block !important');
}

function hideLinks() {
  setTimeout(()=>{document.getElementById("links").setAttribute('style', 'display:none !important')}, 300)
}
