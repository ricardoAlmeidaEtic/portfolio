window.onload = () =>{
    document.getElementById("about-container").innerHTML = fetchData("about");
    document.getElementById("projects-container").innerHTML = fetchData("projects");
}


const fetchData = async(content) =>{
    try {
        const response = await fetch(`http://localhost:8000/${content}/`);
        const data = await response.json();
        writeData(data);

    } catch (error) {
        console.error('Error fetching users:', error);
    }
}