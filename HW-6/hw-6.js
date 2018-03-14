/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/
//body stuff
let body = document.querySelector('body');
body.innerText = "";
body.style.background = 'yellow';

body.style.alignContent = "center";


//img stuff
let newImage = new Image (600,300);
newImage.src = "dissapointment_valley.jpg";
newImage.style.border = "thick solid #0000FF";
newImage.setAttribute("style", "align-content:cener; border : thick solid #0000FF;");

let img = document.createElement("div");


//Lets try to makea header
let header = document.createElement("h1");

header.innerText = "Marc Hendrickson's DOM Development";
header.setAttribute("style", "text-align:center;font-size:24px;")

//lets try to make two new paragraphs
let para= document.createElement("p");
para.innerText = "I am new to this whole thing but I do find that working with the HTML to be conceptually easier than the math that we were doing in the beginning part of the semester.";
para.setAttribute("style", "text-align:center; font-size:15px; font-family:sans-serif; margin-right:20%; margin-left:20%;");

let paraTwo = document.createElement("p");
paraTwo.innerText = "This is the second paragraph that I am putting into my website that demostrates that I have some sort of grasp on this weeks homework.";
paraTwo.setAttribute("style", "text-align:center; font-size:15px; font-family:sans-serif; margin-right:20%; margin-left:20%;");

//Lets create a button to a link
let link = document.createElement("a");
link.innerText = "This is the website that my friend and I just published the other day!";
link.setAttribute("href", "http://www.ebbengroup.com");
link.setAttribute("style", "text-decoration:none; width:50%; margin-left:20%;margin-right:20%;")


img.appendChild(newImage);
body.appendChild(img);
img.appendChild(header);
img.appendChild(para);
img.appendChild(paraTwo);
img.appendChild(link);
