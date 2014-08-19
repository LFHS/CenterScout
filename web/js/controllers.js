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

    $scope.grades = [];
    $scope.courses = [];
    $scope.selectedCourse = '...';

    $scope.setSelectedCourse = function() {
        $scope.selectedCourse = this.course;
    };

    $scope.isSelectedCourse = function() {
        return $scope.selectedCourse == this.course;
    };

    GradeData().then(function(gradeData) {
        gradeData.courses.forEach(function(course) {
            course.assignments.forEach(function(grade) {
                $scope.grades.push({
                    'name':     grade.title,
                    'fraction': grade.grade,
                    'percent':  '',
                    'class':    course.title,
                    'date':     grade.due
                });
            });
        });

        $scope.courses = gradeData.courses.map(function(course) {
            return course.title;
        });

        if($scope.selectedCourse == '...') {
            $scope.selectedCourse = $scope.courses[0];
        }
    }, handleError);

    var chart = {};
    $scope.chart = chart;

    var data = {
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [
            {
                fillColor:        "#f9f9f9",
                pointColor:       "rgba(0,0,0,0)",
                strokeColor:      randomColor({seed: $scope.selectedCourse, luminosity: 'dark'}),
                pointStrokeColor: randomColor({seed: $scope.selectedCourse, luminosity: 'dark'}),
                data : [4, 3, 5, 4, 6]
            }
        ]
    };

    chart.getData = function(selectedCourse) {
        data.datasets[0].strokeColor      = randomColor({seed: $scope.selectedCourse, luminosity: 'dark'});
        data.datasets[0].pointStrokeColor = randomColor({seed: $scope.selectedCourse, luminosity: 'dark'});
        return data;
    };

    chart.options = {
        bezierCurveTension: 0.4,
        responsive: true
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
