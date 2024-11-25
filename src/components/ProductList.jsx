const ProductList = () => {
    const products = [
        { id: 1, name: "Product A", price: "$10" },
        { id: 2, name: "Product B", price: "$20" },
        { id: 3, name: "Product C", price: "$30" },
    ];

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
                <div key={product.id} className="col">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text text-muted">{product.price}</p>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
