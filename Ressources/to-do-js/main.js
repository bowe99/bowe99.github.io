
//Both SVG icons for the list items
var removeSVG = '<svg height="0" viewBox="0 0 64 64" width="0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="linear-gradient" gradientUnits="userSpaceOnUse" x1="-2" x2="65.365" y1="12" y2="12"><stop offset="0" stop-color="#84aa50"/><stop offset="1" stop-color="#00acc9"/></linearGradient><linearGradient id="linear-gradient-2" x2="65.365" xlink:href="#linear-gradient" y1="32" y2="32"/><linearGradient id="linear-gradient-3" x2="65.365" xlink:href="#linear-gradient" y1="46.5" y2="46.5"/><linearGradient id="linear-gradient-4" x2="65.365" xlink:href="#linear-gradient" y1="48.08" y2="48.08"/><linearGradient id="linear-gradient-5" x2="65.365" xlink:href="#linear-gradient" y1="36.016" y2="36.016"/><linearGradient id="linear-gradient-6" x1="-1.994" x2="65.371" xlink:href="#linear-gradient" y1="49.967" y2="49.967"/><linearGradient id="linear-gradient-7" x2="65.365" xlink:href="#linear-gradient" y1="57" y2="57"/><linearGradient id="linear-gradient-8" x2="65.365" xlink:href="#linear-gradient" y1="34.542" y2="34.542"/><g id="Gradient_outline" data-name="Gradient outline"><path d="m45.958 16.713-3-10a1 1 0 0 0 -.958-.713h-20a1 1 0 0 0 -.958.713l-3 10a1 1 0 0 0 .958 1.287h26a1 1 0 0 0 .958-1.287zm-25.614-.713 2.4-8h18.512l2.4 8z" fill="url(#linear-gradient)"/><path d="m10 26h1.054l1.946 35.056a1 1 0 0 0 1 .944h36a1 1 0 0 0 1-.944l1.946-35.056h1.054a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1h-2.28l-5.772-17.316a1 1 0 0 0 -.948-.684h-26a1 1 0 0 0 -.948.684l-5.772 17.316h-2.28a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1zm39.054 34h-34.108l-1.889-34h37.886zm-29.333-56h24.558l5.333 16h-35.224zm-8.721 18h42v2h-42z" fill="url(#linear-gradient-2)"/><path d="m22 51h8v-2h-6.276l2.341-4.1 1.1 1.654 1.664-1.11-2-3a1 1 0 0 0 -.829-.444h-4v2h2.276l-3.144 5.5a1 1 0 0 0 .868 1.5z" fill="url(#linear-gradient-3)"/><path d="m40.483 49h-5.615l.964-1.445-1.664-1.11-2 3a1 1 0 0 0 -.05 1.027c.016.029.05.083.05.083l2 3 1.664-1.11-.964-1.445h7.132a1 1 0 0 0 .919-1.394l-3-7-1.838.788z" fill="url(#linear-gradient-4)"/><path d="m32 33.887 3.2 5.113h-2.2v2h4a1 1 0 0 0 .832-.445l2-3-1.664-1.11-1.141 1.712-4.179-6.687a1.039 1.039 0 0 0 -1.7 0l-5 8 1.7 1.06z" fill="url(#linear-gradient-5)"/><path d="m18 58h7v-2h-6.064l-.936-14.066-2 .132 1 15a1 1 0 0 0 1 .934z" fill="url(#linear-gradient-6)"/><path d="m27 56h2v2h-2z" fill="url(#linear-gradient-7)"/><path d="m46 40.917 2 .166 1-12a1 1 0 0 0 -1-1.083h-6v2h4.913z" fill="url(#linear-gradient-8)"/></g></svg>'
var completeSVG = '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="24" height="24"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>'


//User clicked on add button
//If there is any textin text field then add to to-do list
document.getElementById('add').addEventListener('click', function(){
    var value = document.getElementById('item').value;
    if(value){
        addItemTodo(value);
        document.getElementById('item').value = '';
    }
});

var input = document.getElementById('item');
input.addEventListener('keyup', function(e){
    var value = document.getElementById('item').value;

    if(e.keyCode === 13){
        document.getElementById('add').click();
    }
})


function removeItem(){
    console.log(this.parentNode);
    console.log(this.parentNode.parentNode);
    var itemRemoved = this.parentNode.parentNode;
    var parent = itemRemoved.parentNode;
    
    parent.removeChild(itemRemoved);
}

function completeItem(){
   
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    var id = parent.id;

    var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    target.insertBefore(item, target.childNodes[0]);
}


//Adds an item to the todo list
function addItemTodo(text){
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div')
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    //Add click event to remove item
    remove.addEventListener('click', removeItem);



    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    //Add click event to add to new list
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);

    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}