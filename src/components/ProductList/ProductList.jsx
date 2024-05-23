import PriceDisplay from "../PriceDisplay/PriceDisplay";
import clsx from "clsx";
import style from './ProductList.module.scss';

const ProductListItem = ({ name, price, promo }) => {

    return (
        // <div className={style.card + ' ' + (promo ? style.promo : '')}>
        <div className={clsx(style.card, promo && style.promo)}>
            <h3>{name}</h3>
            <p><PriceDisplay price={price} /> {promo && 'PROMO'}</p>
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
        <div className={style.cards}>
            {productsJSX}
        </div>
    );
};

ProductList.defaultProps = {
    products: []
};

export default ProductList;