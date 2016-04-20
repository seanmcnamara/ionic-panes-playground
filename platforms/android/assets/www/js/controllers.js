angular.module('starter.controllers', ['esri.map'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SimpleMapCtrl', function($scope, esriLoader) {
    esriLoader.require([
      'esri/config'
    ], function(config) {
      config.defaults.io.corsDetection = false;
    });
    $scope.map = {
        options: {
            basemap: 'topo',
            center: [-80.21,25.78],
            zoom: 13,
            sliderStyle: 'small'
        }
    };

    $scope.mapLoaded = function(map)
    {
      map.on("click", function(e){
        console.log(e);
      })
    };
    $scope.mapClick = function(e) {
      console.log(e);
    };

    $scope.layerClick = function(e) {
      console.log(e);
    };
})

// .controller('MapController', function(esriLoader) {
//     var self = this;
//     esriLoader.require(['esri/Map'], function(Map) {
//         self.map = new Map({
//             basemap: 'streets'
//         });
//     });
// })

.controller('MapController', function ($scope, esriLoader) {
  esriLoader.require(['esri/Map'], function(Map) {
      $scope.map = new Map({ basemap: 'streets'});
  });
})

.controller('FeatureLayerCtrl', function(esriLoader) {
    var self = this;
    // load esri modules
    esriLoader.require([
        'esri/Map',
        'esri/layers/FeatureLayer',
        'esri/config'
    ], function(Map, FeatureLayer, Config) {
        // create the map
        // and add a feature layer
        self.map = new Map({
            basemap: 'hybrid',
            layers: [
                new FeatureLayer({
                    url: '//services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0'
                })
            ]
        });
    });
})
.controller('MessageListCtrl', function ($scope, $state, MultipleViewsManager, MessageService) {
  $scope.messages = MessageService.all();
  $scope.selectedMessageId = 0;

  if (MultipleViewsManager.isActive()) {
    MultipleViewsManager.updateView('view-message', { messageId: $scope.selectedMessageId });
  }

  $scope.changeMessage = function (message) {
    $scope.selectedMessageId = message.id;
    console.log(MultipleViewsManager.isActive());
    if (MultipleViewsManager.isActive()) {
      MultipleViewsManager.updateView('view-message', { messageId: message.id });
    } else {
      $state.go('viewMessage', { messageId: message.id });
    }
  };
})

.controller('ViewMessageCtrl', function ($scope, $stateParams, MultipleViewsManager, MessageService) {
  $scope.message = MessageService.get($stateParams.messageId);

  MultipleViewsManager.updated('view-message', function (params) {
    $scope.message = MessageService.get(params.messageId);
  });
});
