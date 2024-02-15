// Show an element by id
function showElement(elementId){
    const elementItem = document.getElementById(elementId);
    elementItem.classList.remove('hidden')
}
// Hide an element by id
function hideElement(elementId){
    const elementItem = document.getElementById(elementId);
    elementItem.classList.add('hidden')
}
