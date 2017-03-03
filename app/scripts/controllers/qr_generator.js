'use strict';

/**
 * @ngdoc function
 * @name webMaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webMaoApp
 */

app.controller('QRgeneratorCtrl', function ($scope) {
  $scope.n_mesas = [];
  $scope.ID_mesa = "";
  $scope.GenerarQR = function () {
    $scope.n_mesas = [];
    var txt = $scope.ID_mesa;
    if (txt != "") {
      if (txt.includes(",") || txt.includes("-")) {
        if (txt.includes(",")) {
          var olst = txt.split(",");
          for (var i in olst) {
            if (olst[i].includes("-")) {
              var olst_ = olst[i].split("-");
              for (var k = olst_[0]; k <= olst_[1]; k++) {
                $scope.n_mesas.push(k);
              }
            } else {
              $scope.n_mesas.push(olst[i]);
            }
          }
        } else if (txt.includes("-")) {
          var olst_ = txt.split("-");
          for (var k = olst_[0]; k <= olst_[1]; k++) {
            $scope.n_mesas.push(k);
          }
        }

      } else {
        $scope.n_mesas.push(txt)

      }
    }

  }

  $scope.printDiv = function() {
	  	
	  	// var mywindow = window.open('', 'PRINT', 'height=400,width=600');
      //   window.focus();
	  	// mywindow.blur();

      //   mywindow.document.write(document.getElementById("printable").innerHTML);

      //   //mywindow.document.close(); // necessary for IE >= 10
      //   // mywindow.focus(); // necessary for IE >= 10*/

      //   mywindow.print();
        
		$.print("#printable");
        
	}; 
});
