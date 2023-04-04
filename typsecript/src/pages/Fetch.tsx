import React, { useState, useEffect } from 'react'

interface Data {
    id: number
    name: string
}
const Fetch = () => {
    // Sägr att data ska sparas i en array?
    const [data, setData] = useState<Data[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://avancera.app/cities')
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
    }, [])
    return (
        <>
            <h1>Cities</h1>
            <ul>
                {/* detta är jsx -> då använder man () istället för måsvingar */}
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Fetch
