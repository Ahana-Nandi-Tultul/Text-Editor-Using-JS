function setTextAreaValue(elementId, newValue){
    const textAreaElement = document.getElementById(elementId);
    textAreaElement.value = newValue;
    console.log(textAreaElement, newValue);
}