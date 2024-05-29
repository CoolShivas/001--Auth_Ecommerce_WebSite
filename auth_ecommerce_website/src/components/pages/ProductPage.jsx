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
                    {/*Starting of FIRST Hard coded the first product  */}
                    {/* <p>{productElements[0].id} </p> */}
                    <h2>
                        {productElements[0].title}
                    </h2>
                    <img src={productElements[0].imageUrl} alt="image not found" />

                    <div className={styles.product_price__quantity}>
                        <span className={styles.price}>
                            Rs. {productElements[0].price} /-
                        </span>
                        <span>
                            {/* {productElements[0].quantity} */}
                            <button className={styles.add_to_cart__btn}> Add to cart </button>
                        </span>
                    </div>
                    {/* Ending of FIRST Hard coded the first product  */}

                    {/*Starting of SECOND Hard coded the first product  */}
                    {/* <p>{productElements[0].id} </p> */}
                    <h2>
                        {productElements[1].title}
                    </h2>
                    <img src={productElements[1].imageUrl} alt="image not found" />

                    <div className={styles.product_price__quantity}>
                        <span className={styles.price}>
                            Rs. {productElements[1].price} /-
                        </span>
                        <span>
                            {/* {productElements[0].quantity} */}
                            <button className={styles.add_to_cart__btn}> Add to cart </button>
                        </span>
                    </div>
                    {/* Ending of SECOND Hard coded the first product  */}

                </div>

            </div>
        </div>
    )
}

export default ProductPage;