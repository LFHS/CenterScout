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
    $scope.courses = [];
    $scope.selectedCourse = '...';

    $scope.setSelectedCourse = function() {
        $scope.selectedCourse = this.course;
    };

    $scope.isSelectedCourse = function() {
        return $scope.selectedCourse == this.course;
    };

    GradeData().then(function(grades) {
        $scope.grades = grades;
        $scope.courses = grades.map(function(grade) {
            return grade.class;
        });
        $scope.courses = $scope.courses.filter(function(element, index, array){
            return array.indexOf(element) >= index;
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
                strokeColor:      randomColor({seed: $scope.selectedCourse}),
                pointStrokeColor: randomColor({seed: $scope.selectedCourse}),
                data : [4, 3, 5, 4, 6]
            }
        ]
    };

    chart.getData = function(selectedCourse) {
        data.datasets[0].strokeColor      = randomColor({seed: $scope.selectedCourse});
        data.datasets[0].pointStrokeColor = randomColor({seed: $scope.selectedCourse});
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
