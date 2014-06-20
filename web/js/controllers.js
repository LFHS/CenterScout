CenterScout.controller('HomeController', ['$scope', 'gradeData', 'assignmentData', function($scope, gradeData, assignmentData) {

    $scope.assignments = [{ done: false, name: 'Loading...', class: '', date: ''}]; // TODO: Find a better way of doing this hack
    $scope.grades = [{ name: 'Loading...', class: '', date: '', percent: '', fraction: ''}];

    $scope.classes = []; // TODO: Find a way to use the PowerSchool names for only the classes in lfhs.org

    gradeData().success(function(grades) {
        $scope.grades = grades;
    });

    assignmentData().success(function(assignments) {
        $scope.assignments = assignments;
    });


}]);

CenterScout.controller('ClassController', ['$scope', function($scope) {

}]);

CenterScout.controller('AboutController', ['$scope', function($scope) {

}]);

CenterScout.controller('ErrorController', ['$scope', function($scope) {

}]);
