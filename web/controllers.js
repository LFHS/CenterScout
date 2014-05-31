CenterScout.controller('HomeController', ['$scope', function($scope) {
    $scope.assignments = [
        {
            'done':  false,
            'name':  'Read p.325-330',
            'class': 'WC',
            'date':  '02/05'
        },
        {
            'done':  false,
            'name':  'WS p.524#1-10',
            'class': 'M',
            'date':  '05/29'
        },
        {
            'done':  true,
            'name':  'CAD Presentation',
            'class': 'CAD',
            'date':  '05/30'
        },
    ];
}]);

CenterScout.controller('ClassController', ['$scope', function($scope) {

}]);

CenterScout.controller('AboutController', ['$scope', function($scope) {

}]);

CenterScout.controller('ErrorController', ['$scope', function($scope) {

}]);
