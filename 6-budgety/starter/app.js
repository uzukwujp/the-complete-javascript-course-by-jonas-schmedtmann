/*
    * Encapsulate the data.
    * Only expose it using publicTest.
    * This can only be called using publicTest.
    * The add variable is not avaliable in the global scope.
    * This works due to the power of closures
    * x variable, and add method are private. They cannot be access from the outside.
    * Public test method is public, as it can be accessed from outside the scope.
*/

var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();

var UIController = (function() {


})();


var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);



