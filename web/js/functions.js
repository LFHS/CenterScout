function isCordova() {
    return !!window.location.href.match(/cordova=1/);
}

function handleError() {
    alert('An Internal Error Has Occured');
}
