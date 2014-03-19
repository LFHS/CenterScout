// Client side representation of the server
window.Server = function(host) {
  
  this.host = (host || window.location.host);
  this.apiurl = 'https://' + this.host + '/api/';
  
  function post(endpoint, params, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', this.apiurl + endpoint);
  }
  
}
