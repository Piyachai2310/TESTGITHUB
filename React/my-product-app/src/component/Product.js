import React from "react";


const products = [
    {
        id: 1,
        title: 'broccoli',
        isFruit: false
    },

    {
        id: 2,
        title: 'basil',
        isFruit: false
    },

    {
        id: 3,
        title: 'apple',
        isFruit: true
    }
];


function Product() {
    return (
        <div className="App">
            <h1> My Product </h1>
            {products.map((data) => (
                <div key = {data.id}
                    style={{ color: data.isFruit ? 'red' : 'green' }}
                >
                    {data.title}
                   
                </div>
                )
            )
            }
        </div>


    );
}

export default Product;