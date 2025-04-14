// Change text content dynamically
const textChangerBtn = document.getElementById('text-changer');
const dynamicText = document.getElementById('dynamic-text');

textChangerBtn.addEventListener('click', () => {
    dynamicText.textContent = "Text has been changed dynamically using JavaScript!";
});

// Modify CSS styles via JavaScript
const styleChangerBtn = document.getElementById('style-changer');
const styleDemo = document.getElementById('style-demo');

styleChangerBtn.addEventListener('click', () => {
    styleDemo.style.backgroundColor = getRandomColor();
    styleDemo.style.color = 'white';
    styleDemo.style.padding = '20px';
    styleDemo.style.borderRadius = '10px';
});

// Add or remove an element when button is clicked
const toggleElementBtn = document.getElementById('toggle-element');
const elementContainer = document.getElementById('element-container');
let newElementExists = false;
let newElement = null;

toggleElementBtn.addEventListener('click', () => {
    if (!newElementExists) {
        newElement = document.createElement('p');
        newElement.textContent = 'New dynamically added element!';
        newElement.classList.add('highlight');
        elementContainer.appendChild(newElement);
        toggleElementBtn.textContent = 'Remove Element';
    } else {
        elementContainer.removeChild(newElement);
        toggleElementBtn.textContent = 'Add Element';
    }
    newElementExists = !newElementExists;
});

// Helper function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}