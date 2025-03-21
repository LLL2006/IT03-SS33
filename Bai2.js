document.getElementById("checkButton").addEventListener("click", function () {
    let text = document.getElementById("textInput").value;
    let charCount = text.length;
    document.getElementById("charCount").textContent = charCount + " ký tự";
});
