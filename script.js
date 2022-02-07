function compute()
{
    var principal =document.getElementById("principal").value;
    var rate =document.getElementById("rate").value;
    var years =document.getElementById("years").value;
    var maths=principal*rate*years/100;
    var result=document.getElementById("result");
    let today= new Date(); 
    var year =new Date().getFullYear()+parseInt(years);

    if(principal == "" || principal <= 0)
    {
        alert("Please enter in this box\n  ** a positive number **  \nthe value you have just passed is invalid");
        document.getElementById("principal").focus();
        return;
    }
    
    result.innerHTML="If you deposit " + "<span class='hl1'>" +principal+ "</span>" + "\<br\>at an interest rate of " + "<span class='hl1'>" +rate+ "</span>%" + "\<br\>You will receive an amount of " + "<span class='hl2'>" +maths+ "</span>" + "\<br\>in the year " + "<span class='hl1'>" +year+ "</span>" + "\<br\>"
}
 
function updateRate()
{
    var rateval =document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}