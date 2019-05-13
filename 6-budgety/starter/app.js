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

    var DomStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            // Return object, instead of variable declarations
            return {
                type: document.querySelector(DomStrings.inputType).value,
                description: document.querySelector(DomStrings.inputDescription).value,
                value: document.querySelector(DomStrings.inputValue).value
            }
        },
         getDomStrings: function(){
             return DomStrings;
         }
    }
})();


var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDomStrings();
    var ctrlAddItem = function() {
        // 1. Get the input data
        var input = UICtrl.getInput();
        console.log(input);


        // 2. Add item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budger

        // 5. Display the budget on the UI 
        console.log('It works');
    }


    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });


})(budgetController, UIController);



