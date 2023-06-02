const playBtn = document.querySelector("#playVid-btn");
console.log(playBtn);
const videoModal = document.querySelector("#video_modal");
console.log(videoModal);
playBtn.addEventListener("click", () => {
    videoModal.style.display = "block";
});
const closeBtn = document.querySelector("#close-icon");
console.log(closeBtn);

closeBtn.addEventListener("click", () => {
    videoModal.style.display = "none";
})

// Current Year
curYear = document.querySelector("#curYear");
console.log(curYear);
curYear.textContent = new Date().getFullYear();
