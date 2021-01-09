let d = new Date();
let year = d.getFullYear();
document.getElement("").innerhtml = year;

let modified = new Date(document.lastModified);
document.getElementById("last").innerhtml = modified;