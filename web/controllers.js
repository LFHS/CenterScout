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
        }
    ];

    $scope.grades = [
        {
            'name':  'Chapter 12 TEST',
            'class': 'M',
            'date':  '02/15',
            'percent': '98%',
            'fraction': '49/50'
        },
        {
            'name':  'Chapter 12 Homework',
            'class': 'M',
            'date':  '05/29',
            'percent': '100%',
            'fraction': '24/24'
        },
        {
            'name':  'Chapter 12.3 Quiz',
            'class': 'CAD',
            'date':  '05/30',
            'percent': '86%',
            'fraction': '26/30'
        }
    ];

    $scope.classes = [
        'M',
        'E',
        'CAD',
        'HE',
        'WC',
        'FR',
        'BIO'
    ];
}]);

CenterScout.controller('ClassController', ['$scope', function($scope) {

}]);

CenterScout.controller('AboutController', ['$scope', function($scope) {

}]);

CenterScout.controller('ErrorController', ['$scope', function($scope) {

}]);
