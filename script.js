const apiUrl = "https://script.google.com/macros/s/AKfycbx-3C9TUTL9SWTLZALQgw0TPsaH6EdxlAGyVdd8wX89kllcw9I6rnZCf40Ml3gCDoEX/exec";

document.getElementById("dataForm").addEventListener("submit", async(e) => {
    e.preventDefault();
    const data = document.getElementById("dataInput").value;

    try {
        const response = await fetch(apiUrl, {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({values : [data]}),
        });
        const result =  await response.json();
        alert(result.message || "Data successfully submitted!");
    } catch (error) {
        console.error(error);
        alert("Failed to submit data");
    }
});

if ("serviceworker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.js")
        .then(() => console.log("Service worker registered"))
        .catch((error) => console.error("Service worker registration failed : ",error));
}

