import { useContext } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import { ProductContext } from "@context/ProductContext";
import "./style.scss";

/*
	This is the component that shows each product that stored in the cart.
*/

function CartItem({ itemData }) {
    const {
        state: { products },
        actions: { updateCartQuantity, deleteCartItem },
    } = useContext(ProductContext);
    const {
        id,
        category,
        productInfo: {
            title,
            creator,
            imageLink: [image],
        },
    } = products.find(({ id }) => id === itemData.productID); // it's all of the product info
    const quantityValues = [
        // all of the values that we want for quantity changer selector.
        { value: 0, label: "0: (Delete)" },
        ...[...Array(30)].map((_, index) => ({
            value: index + 1,
            label: `Qty: ${index + 1}`,
        })),
    ];
    const path = `/product/${category}/${id}`; // path to product's link.

    function deleteItemHandler() {
        deleteCartItem(itemData.id);
    }

    return (
        <section className="cartItem">
            <Link to={path}>
                <img className="cartItem__image" src={image} alt={title} />
            </Link>

            <div className="cartItem__data">
                <Link to={path}>
                    <h2 className="cartItem__title">{title}</h2>
                </Link>
                <p className="cartItem__creator">
                    by {category !== "book" ? creator : creator[0]?.name}
                </p>
                <p className="cartItem__buyOption">
                    {itemData.selectedBuyOption}
                </p>
                <p className="cartItem__availability">In Stock</p>
                <form className="cartItem__giftOption">
                    {/* 
						If the product can deliver as gift then the checkbox and the first label will be shown,
						and if not the both will be disable and the second label will be shown.

						* Because I don't define any data for this section in the db, then all the checkboxes will be disabled.
					*/}
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
                    {/* 
						Quantity changer selector
					*/}
                    <Select
                        className="quantityChanger"
                        classNamePrefix="quantityChanger"
                        defaultValue={quantityValues[itemData.quantity]}
                        options={quantityValues}
                        isSearchable={false}
                        onChange={({ value }) =>
                            updateCartQuantity(itemData.id, value)
                        }
                    />

                    <button
                        className="cartItem__operation link"
                        onClick={deleteItemHandler}>
                        Delete
                    </button>

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
