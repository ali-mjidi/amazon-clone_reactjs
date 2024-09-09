import { useContext } from "react";

import { ProductContext } from "@context/ProductContext";
import Slider from "@components/Slider/Slider";
import ProductsWrapper from "@components/ProductsWrapper/ProductsWrapper";
import "./style.scss";

function Home() {
    const {
        state: { categories, userLocation },
    } = useContext(ProductContext);

    return (
        <div className="home">
            <Slider />
            <section className="home__content">
                <p className="home__guide">
                    You are on amazon.com. You can also shop on Amazon&nbsp;
                    {userLocation} for millions of products with fast local
                    delivery. Click here to go to &nbsp;
                    <a
                        href="https://amazon.de"
                        target="_blank"
                        className="link home__link ">
                        amazon.de
                    </a>
                </p>

                {categories.map((category, index) => (
                    <div key={index} className="home__productsWrapper">
                        <h3 className="home__heading">
                            Best Sellers in&nbsp;
                            <span className="category">{category}</span>
                        </h3>

                        <ProductsWrapper category={category} />
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Home;
