/* We willen het totaal aantal kijkers berekenen. (laatste deel van de meta informatie)
* Check wat er mis loopt en probeer dit te fixen
 */

const viewers = document.querySelectorAll(`.episode-viewers`);

let total = 0;
viewers.forEach($viewerAmount => {
    const number = parseInt($viewerAmount);
    total = number;
});

console.log(`Er keken in totaal ${total} miljoen personen`);

//Kan je het fixen zonder forEach te gebruiken? (met onder andere map() )
