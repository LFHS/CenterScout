CenterScout.factory('AuthService', ['$http', '$q', function($http, $q) {
    return {
        isSignedIn: function() {
            return !!localStorage.getItem('username') && !!localStorage.getItem('password');
        },
        signIn: function(newUsername, newPassword) {
            localStorage.setItem('username', newUsername);
            localStorage.setItem('password', newPassword);
        },
        signOut: function() {
            localStorage.setItem('username', '');
            localStorage.setItem('password', '');
        },
        getUsername: function() {
            return localStorage.getItem('username');
        },
        getPassword: function() {
            return localStorage.getItem('password');
        }
    };
}]);

CenterScout.factory('GradeData', ['$http', '$q', function($http, $q, AuthService) {
    var grades = null;

    return function() {
        var deferred = $q.defer();

        if(grades) {
            deferred.resolve(grades);
        } else {
            // TODO: Use AuthService for this
            var username = localStorage.getItem('username');
            var password = localStorage.getItem('password');
            var url = 'http://localhost:8080/api/grades' + '?username=' + username + '&password=' + password;
            $http.get(url)
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

CenterScout.factory('Settings', [function() {
    var getKeepLogin = function() {
        return strToBool(localStorage.getItem('keepLogin'));
    };

    var setKeepLogin = function(value) {
        localStorage.setItem('keepLogin', boolToStr(value));
    };

    return {
        getKeepLogin: getKeepLogin,
        setKeepLogin: setKeepLogin,
    };

}]);
