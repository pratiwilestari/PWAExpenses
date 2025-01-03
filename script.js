const apiUrl = "https://script.google.com/macros/s/AKfycbxeukXhXgwqVaLnVXzn6ZgCCkL0qlD60E1tNV6xRoungeYs5h5APq-OpMzwY7jbkHEb/exec";

// document.getElementById("dataForm").addEventListener("submit", async(e) => {
//     e.preventDefault();
//     const data = document.getElementById("dataInput").value;

//     try {
//         const response = await fetch(apiUrl, {
//             method : "POST",
//             headers : {"Content-Type" : "application/json"},
//             body : JSON.stringify({values : [data]}),
//         });
//         const result =  await response.json();
//         alert(result.message || "Data successfully submitted!");
//     } catch (error) {
//         console.error(error);
//         alert("Failed to submit data");
//     }
// });

// if ("serviceworker" in navigator) {
//     navigator.serviceWorker
//         .register("service-worker.js")
//         .then(() => console.log("Service worker registered"))
//         .catch((error) => console.error("Service worker registration failed : ",error));
// }

fetch(apiUrl, {
    method : "POST",
    headers : {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ values: ["Data1", "Data2"] })
})
    .then(response => response.json())
    .then(data => console.log('Response:', data))
    .catch(error => console.error('Error:', error));
;
