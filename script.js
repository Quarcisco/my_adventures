const popup = document.getElementById('popup');
const regions = document.querySelectorAll('.region');

regions.forEach(region => {
  region.addEventListener('mouseenter', (e) => {
    const id = region.getAttribute('data-id');
    popup.innerHTML = `<img src="pictures/pic_${id}.jpg" alt="Region ${id}">`;
    popup.style.display = 'block';
    popup.style.top = `${e.clientY + 10}px`;
    popup.style.left = `${e.clientX + 10}px`;
  });

  region.addEventListener('mousemove', (e) => {
    popup.style.top = `${e.clientY + 10}px`;
    popup.style.left = `${e.clientX + 10}px`;
  });

  region.addEventListener('mouseleave', () => {
    popup.style.display = 'none';
  });
});

// OVA NADOLE E ZA ZVUKOT I ZA CHECHKLISTATA
const clickSound = new Audio("draw_line_sound.mp3");
clickSound.preload = "auto";
clickSound.volume = 0.5; // 30% volume


// Add the click functionality to all <li> elements inside #lista
document.querySelectorAll("#lista li").forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.toggle("checked");
    clickSound.currentTime = 0;
    clickSound.play();
  });
});


// const audioFiles = ["./audios/audio1.mp3", "./audios/audio2.mp3", "./audios/audio3.mp3", "./audios/audio4.mp3", "./audios/audio5.mp3", "./audios/audio6.mp3"];
const audioFiles = ["./audios/draw_line_sound.mp3"];

const preloadedAudios = audioFiles.map(file => {
  const audio = new Audio(file);
  audio.preload = "auto";
  return audio;
});

document.querySelectorAll("#lista li").forEach(li => {
  li.addEventListener("click", () => {
    li.classList.toggle("crossed");

    const randomIndex = Math.floor(Math.random() * preloadedAudios.length);
    const sound = preloadedAudios[randomIndex].cloneNode(); // prevent overlap issues
    sound.volume = 0.3;
    sound.play();
  });
});