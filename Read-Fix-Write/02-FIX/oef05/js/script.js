/* * We willen bij elke een link 'watch now' plaatsen ipv de metadata
* De link verwijst naar een videobestand 'episode#.mp4'
* De afleveringen die nog niet uitgezonden zijn, kunnen nog niet bekeken worden uiteraard.
* Make it happen!
 */

const episodes = document.querySelectorAll(`.episode-item`);

episodes.forEach($episode => {
  const viewers = $episode.querySelector(`.episode-viewers`).textContent;

  const $meta =  $episode.querySelector(`.episode-meta`);
  var url = `episode$number.mp4`;
  alert(url);
  $meta.innerHTML = <a href="episode4.mp4">Watch now</a>;

  const $air =  $episode.querySelector(`.episode-air`);
  if (Date.parse($air)<=Date.now()){
    $meta.classList.add("active");
  } 
  
});
