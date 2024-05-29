import styles from "./ProductPage.module.css";

const productElements = [

    {
        id: "01",

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {
        id: "02",

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {
        id: "03",

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

];

const ProductPage = () => {
    return (
        <div className={styles.product_page__div}>
            <div className={styles.product_items__div}>

                <div className={styles.products_container}>

                    {productElements.map((currProduct) => {
                        return <li key={currProduct.id}>
                            <h2>
                                {currProduct.title}
                            </h2>
                            <figure>
                                <img src={currProduct.imageUrl} alt="image not found" />
                            </figure>
                            <div className={styles.product_price__quantity}>
                                <span className={styles.price}>
                                    Rs. {currProduct.price} /-
                                </span>
                                <span>
                                    {/* {productElements[0].quantity} */}
                                    <button className={styles.add_to_cart__btn}> Add to cart </button>
                                </span>
                            </div>

                        </li>
                    })}

                </div>
            </div>
        </div>
    )
}

export default ProductPage;