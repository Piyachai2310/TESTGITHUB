import { useParams } from "react-router-dom";

export default function ProductDetail() {
    let params = useParams();

    return (
        <>
            Product detail ID: {params.productId}
        </>
    );
}