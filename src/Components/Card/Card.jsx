import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Card = ({ card }) => {
    
    const { id, category_name, title, card_image, category_text, title_color, category_bg } = card

    return (
        <>
            <Link to={`/carddetails/${id}`}>
                <div className="card bg-base-100 shadow-xl" style={{ background: category_bg }} >
                    <figure><img className='w-full' src={card_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <button className="text-center font-semibold w-24 px-3 py-2 rounded-md" style={{ color: category_text, background: category_bg }}>{category_name}</button>
                        <p className='font-bold' style={{ color: title_color }}>{title}</p>
                    </div>
                </div>
            </Link >
        </>
    );
};

Card.propTypes = {
    card: PropTypes.obj
};

export default Card;