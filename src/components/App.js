import React, { useState, useEffect } from "react"

function App () {
    const [dogImage, setdogImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => setdogImage(data.message))
    }, [])
    if (!dogImage) return <p>Loading...</p>
    return <img src={dogImage} alt="A Random Dog" />
}

export default App
