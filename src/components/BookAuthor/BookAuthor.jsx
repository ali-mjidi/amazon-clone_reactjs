import { useContext } from "react";

import { ProductContext } from "@context/ProductContext";
import Icon from "@components/Icon/Icon";
import "./style.scss";

function BookAuthor() {
    const {
        state: {
            targetProduct: { author },
        },
    } = useContext(ProductContext);

    return (
        <section className="authorWrapper">
            <p className="authorWrapper__title">Follow the authors</p>
            {author?.map(({ name, photo }) => (
                <div className="author">
                    <div className="author__photoWrapper">
                        {photo ?? (
                            <Icon
                                type="circleUser"
                                className="author__photo author__photo--noPhoto"
                            />
                        )}

                        {!photo ?? (
                            <img src={photo} alt="" className="author__photo" />
                        )}
                    </div>

                    <h3 className="author__name product__link">{name}</h3>

                    <button className="author__followBtn">Follow</button>
                </div>
            ))}
        </section>
    );
}

export default BookAuthor;
