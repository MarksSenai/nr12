(function() {
	'use strict';

	angular.module('myApp').factory('Tools', Factory);

	Factory.$inject = [];

	function Factory(){
		return {
			formataRetorno : function(erro){
				var msg = "Favor verificar as inconsistĂȘncias: <br/>";
				for (var i = 0; i < erro.data.length; i++){
					msg += "Campo: " + erro.data[i].path + ". InconsitĂȘncia: " + erro.data[i].message + " <br/>";
				};
				return msg;
			}
		};
	}
})();
