export const gettingVideos = async() => {


    const apiKey = "AIzaSyBxVzMpHy6jX-SPuxJR6IZ2Zzw2_02eVKE"

    return await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgjRxdJawcEitj-oCfnc_ZQ&maxResults=50&key=${apiKey}`)
        .then(response => response.json())


}