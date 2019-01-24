/* * We willen bij elke een link 'watch now' plaatsen ipv de metadata
* De link verwijst naar een videobestand 'episode#.mp4'
* De afleveringen die nog niet uitgezonden zijn, kunnen nog niet bekeken worden uiteraard.
* Make it happen!
 */

const episodes = document.querySelectorAll(`.episode-item`);
var i = 1;
episodes.forEach($episode => {
  const viewers = $episode.querySelector(`.episode-viewers`).textContent;

  const $meta =  $episode.querySelector(`.episode-meta`);
  const $number = $episode.querySelector(`.episode-number`)[0].innerText;
  console.log("$i: " + i);
  console.log("$number: " + number);
  $meta.innerHTML = `$i` + `$number`;//`<a href="episode${i}.mp4">Watch now</a>`;

  const $air =  $episode.querySelector(`.episode-air`);
  if (Date.parse($air)<=Date.now()){
    $meta.classList.add("active");
  } 
  i++;
});
