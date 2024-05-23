//! Documentation par rapport au formatage d'un nombre :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#utiliser_largument_options
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currency

/**
 * Composant pour afficher un prix en euro
 * @param {{price: number}} props 
 * @returns {JSX.Element}
 */
const PriceDisplay = ({ price }) => {

    const priceFormatted = price.toLocaleString(undefined, { 
        style: "currency", 
        currency: "EUR"
    });;

    return (
        <span>{priceFormatted}</span>
    )
}

export default PriceDisplay;