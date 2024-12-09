function go(direction) {
    // Get the current file name from the URL
    const currentFile = window.location.pathname.split('/').pop();
    
    // Determine the current slide number
    let currentSlideNumber;
    if (currentFile === 'index.html') {
        currentSlideNumber = 1;
    } else {
        currentSlideNumber = parseInt(currentFile.match(/\d+/)[0]);
    }

    // Calculate the new slide number
    const newSlideNumber = currentSlideNumber + direction;

    // Generate the new file name
    let newFile;
    if (newSlideNumber === 1) {
        newFile = 'index.html';
    } else if (newSlideNumber < 1) {
        // Handle case where newSlideNumber is less than 1
        alert("You are already on the first slide.");
        return;
    } else {
        newFile = `slide${newSlideNumber}.html`;
    }

    // Navigate to the new file
    window.location.href = newFile;
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const updateButton = document.getElementById('updateButton');
    const userNameSpan = document.getElementById('userName');

    updateButton.addEventListener('click', () => {
        const name = nameInput.value.trim() || "friend";
        userNameSpan.textContent = name;
    });
});
