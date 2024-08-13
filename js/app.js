
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    console.log('click on here')
    this.classList.toggle('active')
  })
}




async function getSAITYoutubeVideos() {
  const playlistId = 'PLJO_Nlhr0mp0t2ddDk9ZGwjkpxUehqdt1'
  const url = `https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=${playlistId}&part=snippet&maxResults=50`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '2a094aa74amsh55437d3b0bf7903p1fcd1ajsn8c9a3d9d75e4',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    // console.log(result);
    // 1. Convert the text to json format
    const data = JSON.parse(result)
    console.log(data)
    // 2. loop to get video data
    let content = ''
    data?.items?.slice(0,3).forEach(item => {
      // image: item.snippet.thumbnails.standard.url
      // title: item.snippet.title
      // video id: item.snippet.resourceId.videoId
      // video url: https://www.youtube.com/watch?v=${id}&list=${playlistid}
      // paylist id: item.snippet.playlistId
      content += `        <div class="video-item">
        <img src="${item.snippet.thumbnails.standard.url}" alt="picture" />
        <h3>${item.snippet.title}</h3>
        <a target="_blank" href="https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}&list=${item.snippet.playlistId}">Watch</a>
      </div>`
    });
    // 3. Change page content
    var videoElement = document.getElementById('video');
    // Change the HTML content of the selected element
    videoElement.innerHTML = content;
  } catch (error) {
    console.error(error);
  }
}

getSAITYoutubeVideos()