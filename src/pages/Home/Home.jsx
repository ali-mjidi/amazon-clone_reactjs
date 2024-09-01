import { useState, useEffect } from "react";

import Products_API from "@api";
import Slider from "@components/Slider/Slider";
import ProductsWrapper from "@components/ProductsWrapper/ProductsWrapper";
import "./style.scss";

function Home() {
    const [bookProducts, setBookProducts] = useState([]);

    async function getBooks() {
        const { data } = await Products_API.get("products", {
            params: {
                category: "book",
            },
        });

        setBookProducts(data);
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className="home">
            <Slider />
            <section className="home__content">
                <p className="home__guide">
                    You are on amazon.com. You can also shop on Amazon Iran for
                    millions of products with fast local delivery. Click here to
                    go to &nbsp;
                    <a
                        href="https://amazon.de"
                        target="_blank"
                        className="link home__link ">
                        amazon.de
                    </a>
                </p>

                <div className="home__productsWrapper">
                    <h3 className="home__heading">Best Sellers in Books</h3>

                    <ProductsWrapper products={bookProducts} />
                </div>
            </section>
        </div>
    );
}

export default Home;
