//Toon in de console alle titels van de afleveringen, maar wel alfabetisch gesorteerd.

const episodes = document.querySelectorAll(`.episode-title`);

for(var i=0;i<episodes.length;i++){
  console.log(episodes[i]);
}




/* const episodes = document.querySelectorAll(`.episode-item`);

const sortEpisodeByTitle = ($a, $b) => {
  const titleA = ;
  const titleB = ;
  if(titleA < titleB){
    return -1;
  }
  if(titleA > titleB){
    return 1;
  }
  return 0;
};

episodes.sort(sortEpisodeByTitle);

episodes.forEach($ep => console.log($ep.querySelector(`.episode-title`).textContent.toLowerCase().slice(1))); */