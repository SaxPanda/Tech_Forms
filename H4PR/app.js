var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', function ($scope) {
    $scope.openUrl = function () {
      window.location.href = 'documentos/Certificacion_Instalacion_Electrica-Peritos_ElectricistaCom.pdf';
      return false;
    }
});
myApp.controller('MyCtrl1', function ($scope) {
    $scope.openUrl1 = function () {
      window.location.href = 'documentos/Certificacion_Instalacion_Electrica-Peritos_ElectricistaRe.pdf';
      return false;
    }
});
myApp.controller('MyCtrl2', function ($scope) {
    $scope.openUrl2 = function () {
      window.location = 'encrypt_chain.html';
      return false;
    }
});

myApp.controller('MyCtrl3', function ($scope) {
    $scope.openUrl3 = function () {
      window.location = 'index_h4pr.html';
      return false;
    }
});
