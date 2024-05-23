const ProductListItem = ({ name, price, promo }) => {

    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

const ProductList = ({ products }) => {

    if(products.length === 0) {
        return (
            <div>
                Aucun produit...
            </div>
        )
    }

    // Créer la liste des composants via la liste "products"
    const productsJSX = products.map(
        product => <ProductListItem {...product} key={product.id} />
    );

    return (
        <div>
            {productsJSX}
        </div>
    );
};

ProductList.defaultProps = {
    products: []
};

export default ProductList;