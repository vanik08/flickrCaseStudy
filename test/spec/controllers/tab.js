'use strict';

describe('Controller: TabctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('flickerCaseStudyApp'));

  var TabctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabctrlCtrl = $controller('TabctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
