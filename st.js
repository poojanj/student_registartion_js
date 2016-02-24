function add() {
	if(true)
	{
		validate();
	}else{
	
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
    }
function reset() {
    document.getElementById("person").reset();
}

function dele(r)
{   
	var i=r.parentNode.parentNode.rowIndex;
 	document.getElementById("list").deleteRow(i);		
}


// Submit form with id function.
function validate() {
var name = document.getElementById("name").value;
var usn = document.getElementById("usn").value;
var yoj = document.getElementById("yoj").value;
var dept = document.getElementById("dept").value;
var college = document.getElementById("college").value;
if (validation()) // Calling validation function
{
document.getElementById("person").submit(); //form submission
alert(" Form Submitted Successfully......");
}
}

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
return true;
}
}

