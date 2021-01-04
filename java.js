//opening lines if still using button
// document.querySelector('button').addEventListener('click'), function(e){
//     code here
// }

document.querySelector('input').addEventListener('keypress', function(e){
    // using enter key for input (button no longer functional)
    if (e.key === 'Enter'){
    // create new list item
    let newLI = document.createElement('li');
    //assign its value
    newLI.innerHTML = input.value;
    //place the list item
    let list = document.querySelector('.uList');

    list.appendChild(newLI);
    //reset input field
    input.value = "";
    //delete list items
    newLI.addEventListener('click', function(e){
    (e.currentTarget).remove();
    } );}
});



