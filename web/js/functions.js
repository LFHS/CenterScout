function isCordova() {
    return !!window.location.href.match(/cordova=1/);
}

function handleError(error) {
    // TODO: Show user some kind of error
    console.log(error);
}

// Using yes/no because I don't like storing true/false in strings for localStorage
function strToBool(string) {
    return (string == 'yes')? true : false;
}

function boolToStr(boolean) {
    return boolean? 'yes' : 'no';
}
