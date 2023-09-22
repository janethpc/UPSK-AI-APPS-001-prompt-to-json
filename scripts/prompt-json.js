async function query(data) {
    const response = await fetch(
        "http://localhost:3000/api/v1/prediction/668a4209-32e8-448f-b8da-5382e54e081d",
        {
            headers: {
                Authorization: "Bearer vUjeI4y/qJ0JqzKE6FGWEbQJddp9LXzZAF30laJ2KdQ=",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});