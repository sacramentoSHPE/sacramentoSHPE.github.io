let upcomingBtn = document.getElementById("upcoming-btn");
let upcomingSection = document.getElementById("upcoming");

let archiveBtn = document.getElementById("archive-btn");
let archiveSection = document.getElementById("archive");

upcomingBtn.addEventListener("click", () => {
    upcomingBtn.classList.toggle("active", true);
    upcomingSection.classList.toggle("d-none", false);

    archiveBtn.classList.toggle("active", false);
    archiveSection.classList.toggle("d-none", true);
});

archiveBtn.addEventListener("click", () => {
    archiveBtn.classList.toggle("active", true);
    archiveSection.classList.toggle("d-none", false);

    upcomingBtn.classList.toggle("active", false);
    upcomingSection.classList.toggle("d-none", true);
});