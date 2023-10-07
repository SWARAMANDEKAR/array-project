studentarray=[];
function SUBMIT () {
    document.getElementById("display_name").innerHTML=" ";
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;

    studentarray.push(name1);
    studentarray.push(name2);
    studentarray.push(name3);
    studentarray.push(name4);
    console.log(studentarray);
   
    document.getElementById("display_name").innerHTML=studentarray;
}
