/* De titel (H1 tag) moet veranderen naar The Crawling Dead
Voeg ook via javascript de classe 'shake' toe */


//let title = document.getElementsByTagName("h1");
//const content = `BeCode Antwerpen`;
//$title.textContent(content);


let title=document.querySelector("h1");

title.textContent="The Crawling Dead";

title.classList.add("shake");


