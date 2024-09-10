import { useContext } from "react";
import Select from "react-select";

import { ProductContext } from "@context/ProductContext";
import "./style.scss";

function CartItem({ itemData }) {
    const {
        state: { products },
    } = useContext(ProductContext);
    const {
        productInfo: {
            title,
            creator: [{ name }],
            imageLink: [image],
        },
    } = products.find(({ id }) => id === itemData.id);
    const quantityValues = [
        { value: 0, label: "0: (Delete)" },
        ...[...Array(30)].map((_, index) => ({
            value: index + 1,
            label: `Qty: ${index + 1}`,
        })),
    ];

    return (
        <section className="cartItem">
            <img className="cartItem__image" src={image} alt={title} />
            <div className="cartItem__data">
                <h2 className="cartItem__title">{title}</h2>
                <p className="cartItem__creator">by {name}</p>
                <p className="cartItem__buyOption">
                    {itemData.selectedBuyOption}
                </p>
                <p className="cartItem__availability">In Stock</p>
                <form className="cartItem__giftOption">
                    <input
                        type="checkbox"
                        id="gift"
                        className="cartItem__giftCheck"
                        disabled
                    />

                    <label
                        htmlFor="gift"
                        className="cartItem__giftLabel cartItem__giftLabel--available">
                        This is a gift.&nbsp;
                        <a href="#" className="product__link link">
                            Learn more.
                        </a>
                    </label>

                    <label
                        htmlFor="gift"
                        className="cartItem__giftLabel cartItem__giftLabel--disable">
                        Gift options not available.&nbsp;
                        <a href="#" className="product__link link">
                            Learn more.
                        </a>
                    </label>
                </form>

                <div className="cartItem__operators">
                    <Select
                        className="quantityChanger"
                        classNamePrefix="quantityChanger"
                        defaultValue={quantityValues[itemData.quantity]}
                        options={quantityValues}
                    />

                    <button className="cartItem__operation link">Delete</button>

                    <button className="cartItem__operation link">
                        Save for later
                    </button>

                    <button className="cartItem__operation link">
                        Compare with similar items
                    </button>

                    <button className="cartItem__operation link">Share</button>
                </div>
            </div>

            <p className="cartItem__cost">${itemData.price}</p>
        </section>
    );
}

export default CartItem;
