function tulosta() {
    var karvo = parseInt(document.getElementById('b1').value);
    var jono = "<p>";
    if (karvo % 2 === 0) {
        for (var i = 2; i <= karvo; i = i + 2) {
            jono += i;
            jono += " ";
        }
        jono += "</p>";
        document.getElementById('juu').innerHTML = jono;
    } else {
        document.getElementById('juu').innerHTML = "virheellinen numero";
    }

}
