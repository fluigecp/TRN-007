    "use strict";
    /**
     * @module servicesModule
     */
    var servicesModule = (function(){
        var searchUserMat = function (mat) {
            var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", mat, mat, ConstraintType.MUST);
            var c2 = DatasetFactory.createConstraint("active", true, true, ConstraintType.MUST);
            var dataset = DatasetFactory.getDataset("colleague", null, [c1,c2], null);
            if (dataset.values.length > 0) {
                return true;
            }
            return false;
        };
        var findNameByMat = function (mat) {
            var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", mat, mat, ConstraintType.MUST);
            var c2 = DatasetFactory.createConstraint("active", true, true, ConstraintType.MUST);
            var dataset = DatasetFactory.getDataset("colleague", null, [c1, c2], null);
            if (dataset.values.length > 0) {
                return dataset.values[0].colleagueName;
            }
            return "";
        };

        return {
            searchUserMat: searchUserMat,
            findNameByMat: findNameByMat
        };
    })();