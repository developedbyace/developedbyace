var items = [];
var items_price = [];
var items_number = [];
var total = [];


function AddCart(a, b) {
  var item_name = a;
  var item_price = b;

  var numberX = prompt("How Many you need ? ");

  if ((!isNaN(numberX)) && (numberX !== "") && (numberX > 0)) {
    items.push(item_name);
    items_price.push(item_price);
    items_number.push(numberX);
    var cost = item_price * numberX;
    total.push(cost);
    var valid = alert("Total price of " + numberX + " " + item_name + "is :" + cost);

  }
  else {
    var invalid = alert("Invalid input");
  }


}


function validateForm(form) {

  var name = document.getElementById("name").value;
  var add1 = document.getElementById("ad1").value;
  var add2 = document.getElementById("ad2").value;
  var num = document.getElementById("num").value;

  if (items.length != 0) {
    if (name == "") {
      alert("Name is empty!");
      return false;
    }
    if(add1 == ""){
      alert("address line 1 is empty")
      return false;
    }

    if(add2 == ""){
      alert("address line 2 is empty")
      return false;
    }
    if(num == ""){
      alert("Contact number is empty")
      return false;
    }
    document.write("Dear , "  + name);
    document.write("<br>");
    document.write("Your Order  :");
    document.write("<br>");
    document.write("<hr/>");

    document.write("<table border=3px>");
    document.write("<th> Order ID </th>" + "<th>Product Name</th>" + "<th>Unit- Cost</th>" + "<th>Quantity</th>" + "<th>Total- Cost</th>");

    var no = 1;
    for (var i = 0; i < items.length; i++) {
      document.write("<tr><td align='center'>" + no + " </td>");
      document.write("<td>" + items[i] + "</td>");
      document.write("<td align='center'>" + items_price[i] + "</td>");
      document.write("<td align='center'>" + items_number[i] + "</td>");
      document.write("<td align='right'>" + "$" + total[i] + "</td></tr>");

      no = no + 1;
    }
    sum = 0;
    for (var i = 0; i < total.length; i++) {
      sum += parseInt(total[i], 10);
    }

    document.write("<tr><td colspan='4' align='center' >Total</td>");
    document.write("<td align='right'>" + "$" + sum + "</td><tr>");
    document.write("</table>");
    
  }else{
    alert("Nothing in the cart");
  }
}