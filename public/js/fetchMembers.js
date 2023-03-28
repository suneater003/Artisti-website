const fetchMembers = () => {   
    // Fetching Members from Database   
    fetch('/members')
    .then((response) => response.json())
    .then((data) => console.log(data));
}