import { useEffect, useState } from "react"

const useProduct = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/servicesdetails.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices];
}
export default useProduct;