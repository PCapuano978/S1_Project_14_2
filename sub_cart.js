"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Patrick M. Capuano
   Date:   4.4.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

// The window on load-in will make sure to start with the "setupCart" function.
window.addEventListener("load", setupCart);

// Declaring the setupCart function for its applications when the site loads.
function setupCart() {

      // The variable "addButtons" is set to the elements with the Class ID of "addButton"
      var addButtons = document.getElementsByClassName("addButton");

      // This loops through the adduttons variable and... well, adds buttons to each of the items through the function of "addItem" to be established later.
      for (var i = 0; i < addButtons.length; i++) {

            document.getElementsByClassName("addButton").click.addItem;

      };

      // The function of addItem id declared here and does the following.
      function addItem() {

            // Creates the food item variable setting it to the event handler that references the next item of the event objects.
            var foodItem = button.nextElementSibling;

            // Food ID is set to the id of the elements with the Class id of "foodItem".
            var foodID = document.getElementsByClassName("foodItem").id;

            // FoodDescription is set to clone's of its node elements of the foodItem node.
            var FoodDescription = foodItem.cloneNode(true);

            // cartBox is set to the document elements with the id of the same name.
            var cartBox = document.getElementById("cartBox");

            // duplicateOrder is set to an initial value of "false".
            duplicateOrder = false;

            // Looping though all of the node elements of cartBox, the following commands are done.
            for (var n = 0; n < node.cartBox.length; n++) {

                  // If the index item has an id equal to FoodID, then it will set the first item to be one higher.
                  if (n.hasAttribute("id") === foodID) {

                        node.cartBox[0] = node.cartBox[0] + 1;

                  }

            };

            // If "duplicateOrder" is false, then it will set the orderCount variable to the first index of the FoodDescription node and then append it to orderCount.
            if (duplicateOrder = false) {

                  var orderCount = node.FoodDescription[1];

                  FoodDescription.appendChild(orderCount);

            }

      }

}