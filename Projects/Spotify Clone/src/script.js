async function getSongs() {
  let response = await fetch('http://127.0.0.1:50133/src/songs/');
  let text = await response.text();
  console.log(text);
  let div = document.createElement('div');
  div.innerHTML = text;
  let as = div.getElementsByTagName('a');
  console.log(as);
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith('.mp3')) {
      songs.push(element.href);
    }
  }
  return songs;
}

getSongs();
