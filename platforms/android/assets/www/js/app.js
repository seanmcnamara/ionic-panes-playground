// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionicMultipleViews', 'esri.map'])

.run(function($ionicPlatform, $rootScope) {

  $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
    console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
  });

  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
    console.log('$stateChangeError - fired when an error occurs during transition.');
    console.log(arguments);
  });

  $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
    console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
  });

  $rootScope.$on('$viewContentLoaded',function(event){
    console.log('$viewContentLoaded - fired after dom rendered',event);
  });

  $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
    console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
    console.log(unfoundState, fromState, fromParams);
  });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'SimpleMapCtrl'
      }
    }
  })

  .state('app.work', {
    url: '/work',
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: 'templates/work.html'
      }
    }
  })

  .state('app.work.list', {
    url: '/list',
    views: {
      'list-view': {
        templateUrl: 'templates/list.html',
      },
      'map-view': {
        templateUrl: 'templates/map.html',
        controller: 'SimpleMapCtrl'
      }
    }
  })
  .state('app.three', {
    url: '/three',
    // templateUrl: 'templates/panes.html',
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: 'templates/three.html'
      }
    }
  })

  .state('app.three.first', {
    url: '/first',
    views: {
      'left-pane': {
        templateUrl: 'templates/left-pane.html',
      },

      'right-pane': {
        templateUrl: 'templates/right-pane.html'
      },

      'third-pane': {
        templateUrl: 'templates/third-pane.html'
      }


    }
  })


  .state('app.panes', {
    url: '/panes',
    // templateUrl: 'templates/panes.html',
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: 'templates/panes.html'
      }
    }
  })

  .state('app.panes.left', {
    url: '/left',
    views: {
      'left-pane': {
        templateUrl: 'templates/left-pane.html',
      },

      'right-pane': {
        templateUrl: 'templates/right-pane.html'
      }
    }
  })
  .state('messages', {
		url: '/messages',
		templateUrl: 'templates/messages.html',
		controller: 'MessageListCtrl'
	})

	.state('viewMessage', {
		url: '/messages/:messageId',
		templateUrl: 'templates/view-message.html',
		controller: 'ViewMessageCtrl'
	})

	.state('app.masterDetail', {
		url: '/masterDetail',
    views: {
		  'menuContent': {
        templateUrl: 'templates/master-detail-layout.html'
      }
    },
		abstract: true
	})

	.state('app.masterDetail.messages', {
		url: '/messages',
		views: {
			'message-list': {
				templateUrl: 'templates/messages.html',
				controller: 'MessageListCtrl'
			},

			'view-message': {
				templateUrl: 'templates/view-message.html',
				controller: 'ViewMessageCtrl'
			}
		}
	});
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/masterDetail/messages');
});
