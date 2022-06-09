import ProductsItems from './ProductsItems';

let angebote = [
    {
        url: 'https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg',
        name: 'cocooil',
        price: '30$'
    },
    {
        url: 'https://www.haus.de/sites/default/files/styles/textbreite_2_spalten_tablet_klein/public/gutewahl/2020-03/Sofortbildkamera_Polaroid%20OneStep%2B-3.jpg?itok=QA7wdMps',
        name: 'Polaroid',
        price: '60$'
    },
    {
        url: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        name: 'Mauimoisture',
        price: '20$'
    }
]

const Products = () => {
    return (
        <div>
            <ProductsItems
                url={angebote[0].url}
                name={angebote[0].name}
                price={angebote[0].price}
            />
            <ProductsItems
                url={angebote[1].url}
                name={angebote[1].name}
                price={angebote[1].price}
            />
            <ProductsItems
                url={angebote[2].url}
                name={angebote[2].name}
                price={angebote[2].price}
            />
        </div>

    )
}

export default Products;