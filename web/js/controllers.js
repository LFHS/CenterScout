CenterScout.controller('HomeController', ['$scope', 'GradeData', 'AssignmentData', function($scope, GradeData, AssignmentData) {

    $scope.grades = [{ name: 'Loading...', class: '', date: '', percent: '', fraction: ''}];
    $scope.assignments = [{ done: false, name: 'Loading...', class: '', date: ''}]; // TODO: Find a better way of doing this hack
    $scope.courses = ['M', 'CAD']; // TODO: Find a way to use the PowerSchool names for only the classes in lfhs.or
    $scope.selectedCourse = '...';

    $scope.setSelectedCourse = function() {
        $scope.selectedCourse = this.course;
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

    AssignmentData().then(function(assignments) {
        $scope.assignments = assignments;
    }, handleError);

}]);

CenterScout.controller('LoginController', ['$scope', function($scope) {
    
}]);

CenterScout.controller('ClassController', ['$scope', function($scope) {

}]);

CenterScout.controller('AboutController', ['$scope', function($scope) {

}]);

CenterScout.controller('ErrorController', ['$scope', function($scope) {

}]);
