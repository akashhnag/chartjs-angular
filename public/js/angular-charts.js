var app=angular.module("app", ["chart.js"]);

app.controller("mainCtrl",function($scope,$http,$window){

    $http.get("/line").then(function(res){
        var labels=[];
        var data=[];
        var series=[];
        for(var i=0;i<res.data.length;i++){
            labels[i]=res.data[i].Year;
            data[i]=res.data[i].Value;
            series[i]=res.data[i].Continent;
        }
        function removeDuplicateUsingFilter(arr){
            let unique_array = arr.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
            return unique_array
        }
        var lab=[];
        lab=removeDuplicateUsingFilter(labels);
        $scope.years=lab;
    });
   
    $http.get("/data").then(function(res){
        var labels=[];
        var data=[];
        
        for(var i=0;i<res.data.length;i++){
            labels[i]=res.data[i].Continent;
            data[i]=res.data[i].Value;
        }
        $scope.labels=labels;
        $scope.data=data;
     })    
    
    $scope.sel=function(x){
        $scope.labels.splice(0,5);
           $scope.data.splice(0,5);
        var snd={year:x}
        $http.post("/data/cg",snd).then(function(res){
            $window.location.reload();
            var labels=[];
            var data=[];
        for(var i=0;i<res.data.length;i++){
            labels[i]=res.data[i].Continent;
            data[i]=res.data[i].Value;
        }
        $scope.labels=labels;
        $scope.data=data;
    })
       
}
});

app.controller("lineCtrl",function($scope,$http){
    $http.get("/line").then(function(res){
        var labels=[];
        var data=[];
        var series=[];
        for(var i=0;i<res.data.length;i++){
            labels[i]=res.data[i].Year;
            data[i]=res.data[i].Value;
            series[i]=res.data[i].Continent;
        }
        function removeDuplicateUsingFilter(arr){
            let unique_array = arr.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
            return unique_array
        }
        var lab,ser,dat=[];
        lab=removeDuplicateUsingFilter(labels);
        ser=removeDuplicateUsingFilter(series);
        $scope.years=lab;
        var len=data.length;
        for( var i=0;i<ser.length;i++){
            dat[i]=data.splice(0,(len/ser.length));
        }
        $scope.data=dat;
        $scope.labels=lab;
        $scope.series=ser; 
     })   
     
    })
    