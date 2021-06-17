//========================= adding new work experience textarea dynamically ================================================
function addNewWorkEx() {
    let newNode = document.createElement("textArea");
    newNode.classList.add("form-control");
    newNode.classList.add("wxField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder",'Enter here');
    let addworkEx = document.getElementById("work-exp");
    let wxpAddButton = document.getElementById("wxAddButton");
    addworkEx.insertBefore(newNode,wxpAddButton);
}


//========================= adding new academic qualification textarea dynamically ================================================
function addNewAcad(){
    let newNode = document.createElement("textArea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder",'Enter here');
    let addAcademics = document.getElementById("acad-qual");
    let acdAddButton = document.getElementById("aqAddButton");
    addAcademics.insertBefore(newNode,acdAddButton);
}

//========================= adding new certifications textarea dynamically ================================================
function addNewCerti(){
    let newNode = document.createElement("textArea");
    newNode.classList.add("form-control");
    newNode.classList.add("certiField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder",'Enter your certifications or achievements');
    let addcertificates = document.getElementById("certificate");
    let certiAddButton = document.getElementById("certiAddButton");
    addcertificates.insertBefore(newNode,certiAddButton);
}

//========================= adding new project textarea dynamically ================================================
function addNewProject(){
    let newNode = document.createElement("textArea");
    newNode.classList.add("form-control");
    newNode.classList.add("projectField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder",'Enter the projects done with newest to oldest');
    let addprojects = document.getElementById("projects");
    let projAddButton = document.getElementById("projAddButton");
    addprojects.insertBefore(newNode,projAddButton);
}



//======================================== generate resume on click function =======================================================
let validResume= false;  
function generateResume(){
  
validResume =validateResume();

if(validResume){

let nameField= document.getElementById("name-field").value;
let tempNameField = document.getElementById("temp-name-field");
tempNameField.innerHTML = nameField;

document.getElementById("temp-contact-field").innerHTML = `<i class="fas fa-mobile-alt p-2"></i>` + document.getElementById("contact-field").value;

document.getElementById("temp-address-field").innerHTML = `<i class="fas fa-map-marker-alt p-2"></i>`+document.getElementById("address-field").value;

document.getElementById("temp-email-field").innerHTML = `<i class="fas fa-envelope-open-text p-2"></i>`+document.getElementById("email-field").value;

document.getElementById("temp-github-profile-field").innerHTML = `<i class="fab fa-github p-2"></i>`+document.getElementById("github-profile-field").value;

document.getElementById("temp-LinkedIn-profile-field").innerHTML = `<i class="fab fa-linkedin p-2"></i>`+document.getElementById("LinkedIn-profile-field").value;

document.getElementById("temp-HackerRank-profile-field").innerHTML = `<i class="fab fa-hackerrank p-2"></i>`+document.getElementById("HackerRank-profile-field").value;

document.getElementById("temp-objective-field").innerHTML = document.getElementById("objective-field").value;


//add-academics
let acedemics = document.getElementsByClassName("aqField");

let aqliStrings= "";
for(let e of acedemics){
    aqliStrings = aqliStrings + `<li> ${e.value} </li>`;
}
document.getElementById("temp-aqField").innerHTML = aqliStrings;

//work-experience
let workExperiences = document.getElementsByClassName("wxField");

let liStrings= "";
for(let e of workExperiences){
    liStrings = liStrings + `<li> ${e.value} </li>`;
}
document.getElementById("temp-wxField").innerHTML = liStrings;

//certifications
let certificates = document.getElementsByClassName("certiField");

let certiStrings= "";
for(let e of certificates){
    certiStrings = certiStrings + `<li> ${e.value} </li>`;
}
document.getElementById("temp-certiField").innerHTML = certiStrings;


//projects
let projects = document.getElementsByClassName("projectField");

let projectStrings= "";
for(let e of projects){
    projectStrings = projectStrings + `<li> ${e.value} </li>`;
}
document.getElementById("temp-projectField").innerHTML = projectStrings;

//profile picture
let file= document.getElementById("imgField").files[0];
if(file!=null){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    document.getElementById("temp-image").src = reader.result;
    reader.onloadend = function() {
        document.getElementById("temp-image").src = reader.result;
    } 
}
else{
    document.getElementById("temp-image").src = "https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-edit-profile-icon-png-image_760869.jpg";
}

document.getElementById("resume-form").style.display = 'none';
document.getElementById("resume-template").style.display='block';
 
}
else{
}
}

//========================================== print resume on click function =========================================================
function printResume(){
    window.print();
}

//=================================== toggle between preview and edit buton =========================================================
let inputShow = true;
let valid=false;
function toggle(){
    if(inputShow){
        valid=validateResume();
        if(valid){
        document.getElementById("resume-form").style.display = 'none';
        generateResume();
        document.getElementById("resume-template").style.display='block';
        inputShow =false;
        }else{
        }
    }else{
        document.getElementById("resume-form").style.display = 'block';
        document.getElementById("resume-template").style.display='none';
        inputShow= true;
    }
}


//=================================== function for validation on number and email feilds================================================================
function validateResume()  
{ 
    var valid=true; 

    //validate phone number
    var phone = document.getElementById("contact-field").value;
    var regx = /^[6-9]\d{9}$/ ;
        if(phone!=null && regx.test(phone)){
            valid= true;
        }
        else {
            alert("Please enter a valid phone number"); 
            valid= false;
            return valid;
        }

    //validate email
    var email=document.getElementById("email-field").value; 
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
        if (email!=null && atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
            alert("Please enter a valid e-mail address");  
            valid=false;
            return valid;
        } 
  return valid;
}  
