var submitBtn=document.getElementById("submitButton");

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    validateForm();
});


function validateForm(){
    var fullname=document.forms["myForm"] ["fname"].value;
    var email=document.forms["myForm"] ["email"].value;
    var comment=document.forms["myForm"] ["comment"].value;
    var contactno=document.forms["myForm"] ["contactno"].value;
    var selectedValue=document.forms["myForm"] ["select"].value;
    var country=document.forms["myForm"] ["country"].value;
    
    
    if (fullname==""){
            alert("Full name must be enter");
            return false;
    }
    else if (email==""){
            alert("Email must be enter");
            return false;
    }
    else if (comment==""){
            alert("Description must be enter");
            return false;
    }
    else{
    
            document.getElementById('fulname').innerHTML = "Name: " + fullname;
            document.getElementById('emai').innerHTML = "Email: " + email;
            document.getElementById('cont').innerHTML = "Contact Number: " + contactno;
            document.getElementById('countr').innerHTML = "Country: " + country;
            document.getElementById('typ').innerHTML = "Type: " + selectedValue;
            document.getElementById('desc').innerHTML = "Comment: " + comment;
            document.getElementById('f1').style.display = "none";
            document.getElementById('div').style.display = "block";
    }
    
}
    function edit(){
        document.getElementById('div').style.display = "none";
        document.getElementById('f1').style.display = "inline-grid";
}
    function send() {
    var link = "mailto:kasun.2019266@iit.ac.lk"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('f1').value)
    ;
    
    window.location.href = link;
}    
        






// </script>