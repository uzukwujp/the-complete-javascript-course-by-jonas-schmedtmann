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


})();

var UIController = (function() {


})();


var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. Get the input data

        // 2. Add item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budger

        // 5. Display the budget on the UI 
        console.log('It works');
    }


    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });


})(budgetController, UIController);



