    "use strict";
    /**
     * @module servicesModule
     */
    var servicesModule = (function(){
        var searchUserMat = function(mat) {
            var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", mat, mat, ConstraintType.MUST);
            var c2 = DatasetFactory.createConstraint("active", true, true, ConstraintType.MUST);
            var dataset = DatasetFactory.getDataset("colleague", null, [c1, c2], null);
            if (dataset.values.length > 0) {
                return true;
            }
            return false;
        };
        var findNameByMat = function(mat) {
            var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", mat, mat, ConstraintType.MUST);
            var c2 = DatasetFactory.createConstraint("active", true, true, ConstraintType.MUST);
            var dataset = DatasetFactory.getDataset("colleague", null, [c1, c2], null);
            if (dataset.values.length > 0) {
                return dataset.values[0].colleagueName;
            }
            return "";
        };

        var findLotacaoByMat = function(mat) {
            var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
            var c2 = DatasetFactory.createConstraint("matricula", mat, mat, ConstraintType.MUST);
            var humanusData = DatasetFactory.getDataset("wsFuncionarios", null, [c2], null);
            if (humanusData.values.length > 0) {
                var lotacaoId = humanusData.values[0].lotacao;
                var c3 = DatasetFactory.createConstraint("codLotacao", lotacaoId, lotacaoId, ConstraintType.MUST);
                var lotacaoData = DatasetFactory.getDataset("cadastro_lotacao", null, [c1, c3], null);
                if (lotacaoData.values.length > 0) {
                    return lotacaoData.values[0].lotacao;
                }
            }
            return "";
        }

        return {
            searchUserMat: searchUserMat,
            findNameByMat: findNameByMat,
            findLotacaoByMat: findLotacaoByMat
        };
    })();