//We willen in de lijst met afleveringen enkel deze van Freddy Lamarr overhouden;

const episodeWriters = document.querySelectorAll(`.episode-writer`);

for (var i=0;i<episodeWriters.length;i++){
    
       if (episodeWriters[i].textContent!=="Freddy Lamarr"){   
      
        episodeWriters[i].parentNode.parentNode.remove()
     
       }
}



/*  episodes.forEach($episode => {
  $director = 
  if ($director.textContent === `Freddy Lamarr`) {
    $director.parentNode.remove();
  }
}); */
