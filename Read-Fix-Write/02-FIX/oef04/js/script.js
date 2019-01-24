/* * De huidige aflevering (deze die in de header staat) Moet meer opvallen in de lijst met afleverigen. Geef de titel in de lijst de class 'highlight'
* We willen dat, indien er een andere aflevering in de header staat, automatisch de andere aflevering in de lijst de highlight krijgt.
 */

const episodes = document.querySelectorAll(`.episode-title`);
const currentEpisode = document.querySelector(`.subtitle`);
 

 

 episodes.forEach(episode => {
  if (episode.textContent === currentEpisode.textContent) {
     episode.parentNode.classList.add (`highlight`);
  }
}); 

 

/* episodes.forEach($episode => {
  if ($episode.textContent === currentTitle) {
    $episode.classList = `highlight`;
  }
}); */
