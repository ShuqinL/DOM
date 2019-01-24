const writers = document.querySelectorAll(`.episode-writer`);
/* 
for(var i=0;i<writers.length;i++){
    console.count(writers[i]);
}
 */
writers.forEach($writer => console.count($writer.innerText));

