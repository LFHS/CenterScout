function isCordova() {
    return !!window.location.href.match(/cordova=1/);
}

function handleError(error) {
    // TODO: Show user some kind of error
    console.log(error);
}
