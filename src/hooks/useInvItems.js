import { useEffect, useState } from "react"

const useInvItems = () => {

    const [invItems, setInvItems] = useState([])

    useEffect(() => {
        fetch('https://aqueous-forest-31171.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setInvItems(data))
    }, [])
    return [invItems, setInvItems]
}

export default useInvItems;