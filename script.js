var list = document.getElementById('list');
function insert() {
    var title = document.getElementById('input').value;
    if (title == '') {
        alert("please enter the title");
    } else {
        var div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent="space-evenely";
        div.style.fontSize = "18px";
        div.style.margin='18px';
        div.className = "item";
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        var label = document.createElement('label');
        var btn = document.createElement('button');
        btn.innerHTML = 'x';
        btn.style.borderRadius='25%';
        btn.style.border='none';
        btn.style.backgroundColor='#436850 '
        btn.style.color='white';
        btn.style.position="fixed";
        btn.style.right = '500px';
        label.htmlFor = checkbox.id;
        label.innerHTML = title;
        list.appendChild(div);
        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(btn);
        btn.addEventListener('click', remove); // Changed from remove() to remove
        document.getElementById('input').value = "";
    }
}

function remove(event) {
    var item = event.target.parentElement; // Get the parent div of the clicked button
    list.removeChild(item); // Remove the item from the list
}

