angular.module('Medicare')
        .controller('NearCtrl', ["$scope", function($scope) {
                if (!BMap) {
                        return;
                }
                // 百度地图API功能
                var map = new BMap.Map("allmap");            // 创建Map实例

                var showMap = function(position) {
                        map.centerAndZoom(new BMap.Point(position.latitude, position.longitude), 11);
                        var local = new BMap.LocalSearch(map, {
                                renderOptions:{map: map, autoViewport:true}
                        });
                        local.searchNearby("药店");
                };
                if (!navigator.geolocation){
                        showMap({
                                latitude: 25.000,
                                longitude: 102.700
                        });
                } else {
                        navigator.geolocation.getCurrentPosition(function(position) {
                                showMap(position);
                        }, function() {
                                showMap({
                                        latitude: 25.000,
                                        longitude: 102.700
                                });
                        });
                }

        }]);
