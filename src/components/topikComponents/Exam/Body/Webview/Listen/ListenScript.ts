export const ListenScript = (audioTime: number) => {
  return `
    <script>
    const audio = document.getElementById('audioListen');
    audio.currentTime =${audioTime > 5 && audioTime - 3}
      const autoPlayAudio = () =>{
       audio.play()
      }
    autoPlayAudio()

   
     const handleEnded = () => {
        const data = { end: true  };
              window.ReactNativeWebView.postMessage(JSON.stringify(data));
    }
     const selectedAnswer = (index,stepId) => {
        const data = { answer: index,stepId};
              window.ReactNativeWebView.postMessage(JSON.stringify(data));
    };

  audio.ontimeupdate = function (){
  const currentTime= audio.currentTime
   const data = {currentTime};
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
  }

  </script>
    `;
};
