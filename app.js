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

//lus over alle kinderen van de laatste dankzij de children eigendom

//verwijder elk kind van ol dankzij removeChild()

//Geef in een array de volgende waarden op: ["Silent Teacher","Code Monkey", "CodeCombat"]

//lus alle kinderen in de eerder gecreëerde tafel

//creëer voor elke waarde van de array een li element met behulp van document.createElement()

//voeg vervolgens elke link toe aan het eerder geselecteerde a element met als naam de waarde van de array.