
function myFunction() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    if (fname != "") document.getElementById("showfname").innerHTML = fname;
    if (lname != "") document.getElementById("showlname").innerHTML = lname;

}

function addSkill() {
    let skill = document.getElementById("skill").value;
    if (skill != "") {
        let ul = document.getElementById("list");
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(skill));
        ul.append(li);
    }

}

function removeSkill() {
    var listItems = document.getElementById("list").getElementsByTagName("li");
    var last = listItems[listItems.length - 1];
    last.parentNode.removeChild(last);
}

function modifyColor() {
    let color = document.getElementById("modifycolor").value;
    document.getElementById("container").style.backgroundColor = color;
}