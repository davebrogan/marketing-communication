function checkInputs() {
    var inputs = document.getElementsByClassName('sig-part');
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.value !== '') {
            setSigValue(input.value, input.id);
        } else {
            hideSigValue(input.id);
        }
    }
}

function setSigValue(value, id) {
    var sigs = document.getElementsByClassName('sig-' + id);
    if (id === 'website') {
        value = 'https://www.weber.edu/' + value;
    }
    for (var i = 0; i < sigs.length; i++) {
        var sig = sigs[i];
        sig.style.display = 'block';
        if (id !== 'website') {
            sig.innerText = value;
        } else {
            sig.innerHTML = '<a href="' + value + '" target="_blank">' + value + '</a>';
        }
    }

}

function hideSigValue(id) {
    var sigs = document.getElementsByClassName('sig-' + id);
    for (var i = 0; i < sigs.length; i++) {
        sigs[i].style.display = 'none';
    }
}