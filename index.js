function changeKnowledge(knowledgeId) {
    for (let i = 1; i < 4; i++) {
        const currentText = document.getElementById(`knowledge-${i}`)
        const currentButton = document.getElementById(`btn-${i}`)

        if(i === knowledgeId) {
            currentText.style.display = "block";
            currentButton.classList.add("pressed");
        }else{
            currentText.style.display = "none";
            currentButton.classList.remove("pressed")
        }
    }
}