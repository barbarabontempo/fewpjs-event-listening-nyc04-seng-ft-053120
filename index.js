function addingEventListener() {
    const input = document.getElementById('input'); //finding the elemeny via id name
    input.addEventListener('click', function(event) { //calling variable input that we made above and calling addEventListener() on that variable
    alert('I was clicked!'); //addEventListener takes in two arguments: name of event and a callback function to "handle" event
    }); //
}
