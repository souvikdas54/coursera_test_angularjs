(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;
  var itemsToBuy = [
    { name: "cookies", quantity: 10 },
    { name: "cookies", quantity: 9 },
    { name: "cookies", quantity: 8 },
    { name: "cookies", quantity: 7 },
    { name: "cookies", quantity: 6 },
    { name: "cookies", quantity: 5 },
    { name: "cookies", quantity: 4 },
    { name: "cookies", quantity: 3 },
    { name: "cookies", quantity: 2 },
    { name: "cookies", quantity: 1 },
  ];

  var itemsBought = [];

  service.removeItem = function (itemIdex) {
    var element = itemsToBuy[itemIdex]
    itemsToBuy.splice(itemIdex, 1)
    itemsBought.push(element);
  };

  service.getAlreadyBoughtItems = function () {
    return itemsBought;
  };

  service.getToBuyItems = function () {
    return itemsToBuy;
  };
}

})();
