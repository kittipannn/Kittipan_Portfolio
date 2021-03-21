let text = document.getElementById('text1');
let i = 0;

function postFunction() {
    comment = text.value;
    
    if(i == 0) {
        document.getElementById('topic1').innerHTML = comment;
        i++
        console.log(i);
    }
    
    else if(i == 1) {
        document.getElementById('comment1').innerHTML = comment;
        i++
        console.log(i);
    }

    else if(i == 2) {
        document.getElementById('comment2').innerHTML = comment;
        i++
        console.log(i);
    }
}

function clearFunction() {
    document.getElementById('topic1').innerHTML = '';
    document.getElementById('comment1').innerHTML = '';
    document.getElementById('comment2').innerHTML = '';
    i = 0;
    console.log(i);
}
