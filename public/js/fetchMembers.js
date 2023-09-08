const fetchMembers = () => {   
    let members = document.getElementById("members")
    // Fetching Members from Database   
    fetch('/members')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item.Name;
            li.classList.add("text-body-color", "mb-4", "flex", "text-base", "p-4")
            members.appendChild(li);
        });
    });
}
    
fetchMembers()