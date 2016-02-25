//Validating for USN only numerics allowed
function isNumber(evt) {
        var iKeyCode = (evt.which) ? evt.which : evt.keyCode
        if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
            return false;

        return true;
    }    
//Validating for Name,Dept,College only alphabets allowed 
function alpha(e) {
     var k;
     document.all ? k = e.keyCode : k = e.which;
     return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8);
}//Validating for YoJ only numerics allowed max length 4 from 1920 to current year
function yearValidation(year,ev) {

  var text = /^[0-9]+$/;
  if(ev.type=="blur" || year.length==4 && ev.keyCode!=8 && ev.keyCode!=46) {
    if (year != 0) {
        if ((year != "") && (!text.test(year))) {

            alert("Please Enter Numeric Values Only");
            return false;
        }

        if (year.length != 4) {
            alert("Year is not proper. Please check");
            return false;
        }
        var current_year=new Date().getFullYear();
        if((year < 1920) || (year > current_year))
            {
            alert("Year should be in range 1920 to current year");
            return false;
            }
        return true;
    } }
}

//Js code to add student data and display on the same web page
function added() {

	var rows = "";
        var name = document.getElementById("name").value;
	var usn = document.getElementById("usn").value;
	var yoj = document.getElementById("yoj").value;
        var dept = document.getElementById("dept").value;
        var college = document.getElementById("college").value;

	rows += "<td>" + name + "</td><td>" + usn + "</td><td>" + yoj + "</td><td>" + dept + "</td><td>" + college + "</td><td>" + "<input type='button' value='Delete'  onclick='dele(this)'/>" + "</td>";
        var tbody = document.querySelector("#list");
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        tbody.appendChild(tr)
    }

//Js code to Reset the student data on the form
function reset() {
    document.getElementById("person").reset();
}

//Js code to Delete the student data after adding the student data
function dele(r)
{   
	var i=r.parentNode.parentNode.rowIndex;
 	document.getElementById("list").deleteRow(i);		
}

// Validating  form  Submit using form id 
function validate() {
if (validation()) // Calling validation function
{
document.getElementById("person").submit(); //form submission
alert(" Form Submitted Successfully......");
}

}

// Validating form fields empty or not
function validation(){
var name = document.getElementById("name").value;
var usn = document.getElementById("usn").value;
var yoj = document.getElementById("yoj").value;
var dept = document.getElementById("dept").value;
var college = document.getElementById("college").value;
if( name ==='' || usn==='' || yoj==='' || dept==='' || college==='' ){
alert("Please fill fields...!!!!!!");
return false;
}else{
alert(" Form Validated Successfully......");
return added();
}
}

