//EXERCISE 1:Behandeling van klassen
// selecteer de body
 let body = document.body;

 //neem de "bg-aqua"-klasse weg
 body.classList.remove('bg-aqua');

 //de klasse "bg-olive" toevoegen
 body.classList.add('bg-olive');

//eerste alinea kiezen
let firstParagraph=document.getElementsByTagName("p")[0];

//de klassen "bg-lime" en "gray" te verwijderen
firstParagraph.classList.remove("bg-lime", "gray");

//de "aqua"-klasse eraan toe te voegen
firstParagraph.classList.add("aqua");

//selecteer alle elementen die de klasse 'bg-silver' hebben.
let classElements=document.getElementsByClassName("bg-silver");

//pas alle elementen aan door de klasse "bg-teal" aan de elementen toe te voegen
//Pas het element aan door "bg-silver"-klasse ervan te verwijderen
for(var i=0;i<classElements.length; i++){
    classElements[i].classList.add("bg-teal");
    classElements[i].classList.remove("bg-silver");
}

//selecteer alle blokquote-elementen
let quote=document.getElementsByTagName("blockquote");

//Pas al elementen aan door de klasse "bg-white" an de elementen toe te voegen
for(var i=0;i<quote.length; i++){
 quote[i].classList.add("bg-white");
}


//EXERCISE 2:CSS-selectoren

//Met querySelector selecteert u het element my-table
var table=document.querySelector("#my-table");

//De klasse "bg-purple" toevoegen
table.classList.add("bg-purple");

//met querySelectorAll selecteert u alle paragrafen in "container".
var container=document.querySelectorAll(".container p");

//wijzig alle elementen door het toevoegen van de shadow-klasse
for(var i=0;i<container.length; i++){
container[i].classList.add("shadow");
}


//EXERCISE 3
//Selecteer alle elementen van het type pre.
let pre=document.getElementsByTagName("pre");

//met de eigenschap style wijzigt u de tekstkleur.
//met de style eigenschap verandert de achtergrondkleur dankzij backgroundColor.
//met de style eigenschap voeg een border-top van 3px solid red toe (vergeet niet dat je op deze manier toegang hebt tot de eigenschappen van een object: ["prop-name"]).
//met de style eigenschap voeg een border-bottom van 3px solid red toe.
for(var i=0;i<pre.length; i++){
pre[i].setAttribute("style","color:white; background-color:orange;border-top:3px solid red;border-bottom:3px solid red;");

}

//Selecteer het eerste element van het type h3.
let h3=document.getElementsByTagName("h3")[0];

//vervang de HTML inhoud door <em>Italic title ! yeah !</em>.
h3.innerHTML="<em>Italic title ! yeah !</em>";

//Selecteer het eerste element van het type h2
let h2=document.getElementsByTagName("h2")[0];

//vervang de HTML inhoud door <strong>HTML doesn't work !</strong>
h2.innerHTML="<strong>HTML doesn't work !</strong>";


//EXERCISE 4: Elementen aanmaken
//Selecteer de eerste ul.
let ul=document.getElementsByTagName("ul")[0];

//creëer een li element
let node=document.createElement("LI");


//voeg deze tekst toe My best friend is <a href='http://www.google.com'>Google</a> in de li
node.innerHTML = `My best friend is <a href='http://www.google.com'>Google</a>`

//voeg deze li toe in de ul
ul.appendChild(node);

//selecteer de eerste link in de eerder aangemaakte li
let link=document.getElementsByTagName("a")[1];

//met de eigenschap style wijzigt u de tekstkleur van de link
link.setAttribute("style","color:white;");


//EXERCISE 5: Meerdere elementen maken en verwijderen
//selecteer het eerste 'ol' element
let ol1=document.getElementsByTagName("ol")[0];

//selecteer alle 'li' elementen van deze 'ol' dankzij de children eigendom
let liElements=ol1.children;

//verwijder elk kind van ol dankzij removeChild()
for(var i=0; i<liElements.length;i++){
    ol1.removeChild(liElements[i]);
}


//Maak een array aan met de volgende gegevens: ["Silent Teacher","Code Monkey", "CodeCombat"]
let newLiElements=["Silent Teacher","Code Monkey", "CodeCombat"];

//plaats elke waarde van de array in een li element


//voeg vervolgens elk li element toe aan de eerder leeg gemaakte 'ol'