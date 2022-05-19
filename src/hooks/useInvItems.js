import { useEffect, useState } from "react"

const useInvItems = () => {
    const [invItems, setInvItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setInvItems(data))
    }, [])
    return [invItems, setInvItems]
}

export default useInvItems;