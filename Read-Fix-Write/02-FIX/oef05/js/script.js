/* * We willen bij elke een link 'watch now' plaatsen ipv de metadata
* De link verwijst naar een videobestand 'episode#.mp4'
* De afleveringen die nog niet uitgezonden zijn, kunnen nog niet bekeken worden uiteraard.
* Make it happen!
 */

const episodes = document.querySelectorAll(`.episode-item`);

// https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
episodes.forEach(($episode, $number) => {
  const viewers = $episode.querySelector(`.episode-viewers`).textContent;

  const $meta =  $episode.querySelector(`.episode-meta`);
    
  // https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript
  $meta.innerHTML = "<a href=\"episode" + （$number＋1）+ ".mp4\">Watch now</a>";

  const $air =  $episode.querySelector(`.episode-air`);
  if (Date.parse($air)<=Date.now()){
    $meta.classList.add("active");
  } 
  
});
