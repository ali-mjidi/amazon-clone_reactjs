import Slider from "@components/Slider/Slider";
import "./style.scss";
import ProductsWrapper from "../../components/ProductsWrapper/ProductsWrapper";


function Home() {
    return (
        <div className="home">
            <Slider />
            <section className="home__content">
                <p className="home__guide">
                    You are on amazon.com. You can also shop on Amazon Iran for
                    millions of products with fast local delivery. Click here to
                    go to
                    <a
                        href="https://amazon.de"
                        target="_blank"
                        className="link home__link ">
                        amazon.de
                    </a>
                </p>

                <div className="home__productsWrapper">
                    <h3 className="home__heading">Books</h3>

					<ProductsWrapper />
                </div>
                <div className="home__productsWrapper">
                    <h3 className="home__heading">Books</h3>

					<ProductsWrapper />
                </div>
            </section>
        </div>
    );
}

export default Home;
