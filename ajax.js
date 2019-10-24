function odeslatInfo(x) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax.php?data=" + x, true);
    xhr.send();
}