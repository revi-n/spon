document.getElementById('changeColorBtn').addEventListener('click', function() {
    var messageElement = document.getElementById('message');
    messageElement.style.color = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}