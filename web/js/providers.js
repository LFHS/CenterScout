CenterScout.factory('gradeData', ['$http', function($http) {
    return function() {
        return $http.get('http://localhost:8080/api/grades');
    };
}]);

CenterScout.factory('assignmentData', ['$http', function($http) {
    return function() {
        return $http.get('http://localhost:8080/api/assignments');
    };
}]);
