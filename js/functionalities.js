document.getElementById('btn-bold').addEventListener('click', function(){
    const textAreaElement = document.getElementById('input-textArea');
    textAreaElement.style.fontWeight = "bold";
})

document.getElementById('btn-italic').addEventListener('click', function(){
    const textAreaElement = document.getElementById('input-textArea');
    textAreaElement.style.fontStyle = 'italic';
})
document.getElementById('btn-italic').addEventListener('dblclick', function(){
    const textAreaElement = document.getElementById('input-textArea');
    textAreaElement.style.fontStyle = 'normal';
})
document.getElementById('btn-underline').addEventListener('click', function(){
    const textAreaElement = document.getElementById('input-textArea');
    textAreaElement.style.textDecoration = 'underline';
})
document.getElementById('btn-text-left').addEventListener('click', function(){
    const textAreaElement = document.getElementById('input-textArea');
    textAreaElement.style.textAlign = 'left';
})
document.getElementById('btn-text-center').addEventListener('click', function(){
    const textAreaElement = document.getElementById('input-textArea');
    textAreaElement.style.textAlign = 'center';
})
document.getElementById('btn-text-right').addEventListener('click', function(){
    const textAreaElement = document.getElementById('input-textArea');
    textAreaElement.style.textAlign = 'right';
})
document.getElementById('btn-text-justify').addEventListener('click', function(){
    const textAreaElement = document.getElementById('input-textArea');
    textAreaElement.style.textAlign = 'justify';
})
document.getElementById('fontSizeInput').addEventListener('click', function(event){
    const textAreaElement = document.getElementById('input-textArea');
    textAreaElement.style.fontSize = event.target.value + "px";

})

document.getElementById('btn-lower-upper').addEventListener('click', function(){
    const textAreaElement = document.getElementById('input-textArea');
    const textAreaValueUpper =  textAreaElement.value.toUpperCase();
    textAreaElement.value = textAreaValueUpper;
})
document.getElementById('btn-lower-upper').addEventListener('dblclick', function(){
    const textAreaElement = document.getElementById('input-textArea');
    const textAreaValueUpper =  textAreaElement.value.toLowerCase();
    textAreaElement.value = textAreaValueUpper;
})

document.getElementById('text-color').addEventListener('input', function(event){
    const textAreaElement = document.getElementById('input-textArea');
    console.log(textAreaElement);
    textAreaElement.style.color = event.target.value;
})