let count = sessionStorage.getItem('num_count') || 0;

function updateCount(){

    document.getElementById('num_count').textContent = count;
    sessionStorage.setItem('num_count', count);
}


function increaseCount(){
    count++;
    updateCount();
}

function decreaseCount(){
    count--;
    updateCount();
}

function resetCount(){
    count= 0;
    updateCount();
}

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowUp"){
        increaseCount();
    }
    else if(event.key === "ArrowDown"){
        decreaseCount();
    }
    else if(event.key === "Delete"){
        resetCount();
    }
});

updateCount();