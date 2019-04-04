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

window.addEventListener("load", setupCart);

function setupCart() {

      var addButtons = document.getElementsByClassName("addButtons");

      for (var i = 0; i < addButtons.length; i++) {

            document.getElementsByClassName("addButtons").click.addItem();

      };

      function addItem() {

            var foodItem = button.nextElementSibling;

            var foodID = document.getElementsByClassName("foodItem").id;

            var FoodDescription = foodItem.cloneNode(true);

            var cartBox = getElementsByClassName("cart");

      }

}