onload = () => {
  document.body.classList.remove("container");
  
  const audio = new Audio('twilight_piano.mp3');
    
    // Set properties if needed
    audio.loop = true; // Set to true if you want the music to loop
    audio.volume = 0.5; // Set the volume level (0.0 to 1.0)

    // Attempt to play the audio
    const playAudio = () => {
        audio.play().catch(error => {
            console.error('Error playing the audio:', error);
        });
    };

    // Use a user gesture to start the audio
    document.addEventListener('click', playAudio, { once: true });
};