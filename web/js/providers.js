CenterScout.factory('GradeData', ['$http', '$q', function($http, $q) {
    var grades = null;

    return function() {
        var deferred = $q.defer();

        if(grades) {
            deferred.resolve(grades);
        } else {
            $http.get('http://localhost:8080/api/grades')
                .success(function(gradeData) {
                    grades = gradeData;
                    deferred.resolve(grades);
                })
                .error(function(response) {
                    deferred.reject(response);
                });
        }

        return deferred.promise;
    };
}]);

CenterScout.factory('AssignmentData', ['$http', '$q', function($http, $q) {
    var assignments = null;

    return function() {
        var deferred = $q.defer();

        if(assignments) {
            deferred.resolve(assignments);
        } else {
            $http.get('http://localhost:8080/api/assignments')
                .success(function(assignmentData) {
                    assignments = assignmentData;
                    deferred.resolve(assignments);
                })
                .error(function(response) {
                    deferred.reject(response);
                });
        }

        return deferred.promise;
    };
}]);
