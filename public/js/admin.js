var adminApp=angular.module("adminApp",[]);
adminApp.controller("adminCtrl",function($scope,$http){
       $scope.subAf=function(){
           var snd={Continent:"Africa",
                    Value:$scope.afpop,
                    Year:$scope.yr};
            console.log(snd);
        $http.post("/data",snd).then(function(res){
            console.log(res);
        })
    }
        $scope.subAs=function(){
            var snd={Continent:"Asia",
                    Value:$scope.aspop,
                    Year:$scope.yr};

        $http.post("/data",snd).then(function(res){
            console.log(res);
        })
    }
        $scope.subEu=function(){
            var snd={Continent:"Europe",
                    Value:$scope.eupop,
                    Year:$scope.yr};

        $http.post("/data",snd).then(function(res){
            console.log(res);
        })
        }
    $scope.subLt=function(){
        var snd={Continent:"Latin America",
                Value:$scope.ltpop,
                Year:$scope.yr};

    $http.post("/data",snd).then(function(res){
        console.log(res);
    })
    }
    $scope.subNa=function(){
        var snd={Continent:"North America",
                Value:$scope.napop,
                Year:$scope.yr};

    $http.post("/data",snd).then(function(res){
        console.log(res);
    })
}
})