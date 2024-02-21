const [productTypes, setProductTypes] = useState([]);
const [productTypeId, setProductTypeId] = useState(0);
const [products, setProducts] = useState([]);

useEffect(() => {
    async function fetchData() {
        const response = await fetch(
            "http://localhost:8080/api/product_types" + productTypeId,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("access_token")
                }
            }    
        );

        const json = await response.json();
        setProducts(json.data);
    }

    fetchData();
}, [productTypeId]);


<div className="container">
    <select value={productTypeId} onChange={(e) => setProductTypeId(e.target.value)}>
        <option value={0}>ทุกประเภทสินค้า</option>
        {
            productTypeId.map(item => (
                <option key={item.product_type_id} value={item.product_type_id}>{item.product_type_name}</option>
            ))
        }
    </select>
</div>