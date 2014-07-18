CenterScout.controller('NavController', ['$scope', 'AuthService', function($scope, AuthService) {

    $scope.signOut = function() {
        AuthService.signOut();
    };

    $scope.isSignedIn = AuthService.isSignedIn;

    setInterval(function() {
        if(!AuthService.isSignedIn())
            window.location.hash = "#/login";
    }, 1000);

}]);

CenterScout.controller('HomeController', ['$scope', 'GradeData', function($scope, GradeData) {

    $scope.grades = [{ name: 'Loading...', class: '', date: '', percent: '', fraction: ''}];
    $scope.courses = ['M', 'CAD'];
    $scope.selectedCourse = '...';

    $scope.setSelectedCourse = function() {
        $scope.selectedCourse = this.course;
    };

    $scope.isSelectedCourse = function() {
        return $scope.selectedCourse == this.course;
    };

    var updateClassList = function(grades) {
        grades.forEach(function(grade) {
            if(($scope.courses.indexOf(grade.class) === -1) && (grades.class.indexOf('Lunch') === -1))
                $scope.courses.push(grade.class);
        });
        $scope.selectedCourse = $scope.courses[0];
    };

    GradeData().then(function(grades) {
        $scope.grades = grades;
        updateClassList(grades);
    }, handleError);

    var chart = {};
    $scope.chart = chart;

    chart.getData = function(selectedCourse) {
        return {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets: [
                {
                    fillColor:        "rgba(0,0,0,0)",
                    pointColor:       "rgba(0,0,0,0)",
					strokeColor:      randomColor({seed: selectedCourse}),
                    pointStrokeColor: randomColor({seed: selectedCourse}),
					data : [4, 3, 5, 4, 6]
                }
            ]
        };
    };

    chart.options =  {
        bezierCurveTension : 0.4
    };

}]);

CenterScout.controller('LoginController', ['$scope', 'AuthService', function($scope, AuthService) {

    $scope.signIn = function() {
        AuthService.signIn($scope.username, $scope.password);
        window.location.hash = '#/home';
    };

    // m for minutes
    // h for hours
    // d for days
    // w for weeks
    // y for year
    if(isAtSchool() && !isCordova()) {
        $scope.rememberMeFor = 'h';
    } else {
        $scope.rememberMeFor = 'y';
    }

}]);

CenterScout.controller('ClassController', ['$scope', function($scope) {

}]);

CenterScout.controller('AboutController', ['$scope', function($scope) {

}]);

CenterScout.controller('ErrorController', ['$scope', function($scope) {

}]);

CenterScout.controller('SettingsController', ['$scope', 'Settings', function($scope, Settings) {
    $scope.$watch('generalKeepLogin', Settings.setKeepLogin);
    $scope.generalKeepLogin = Settings.getKeepLogin();
}]);
