const openBtn=document.querySelector("#pop-up-open-btn");
openBtn.addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
})

const closeBtn=document.querySelector(".popup .pop-close-btn");
closeBtn.addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
})




// 
// Function to open the popup
function openPopup() {
    const popup = document.querySelector('.popup');
    popup.classList.add('active');
}
// Function to open the popup
function openPopup() {
    const popup = document.querySelector('.popup');
    popup.classList.add('active');
    popup.classList.remove('hidden'); // Ensure the popup is not hidden
}

// Function to close the popup
function closePopup() {
    const popup = document.querySelector('.popup');
    popup.classList.remove('active');
    popup.classList.add('hidden'); // Add hidden class to trigger closing animation

    // Add active class to the center element to trigger showing the original content animation
    const center = document.querySelector('.center');
    center.classList.add('active');
}

// Event listener for opening the popup
const openButton = document.getElementById('pop-up-open-btn');
openButton.addEventListener('click', openPopup);

// Event listener for closing the popup
const closeButton = document.querySelector('.pop-close-btn');
closeButton.addEventListener('click', closePopup);
