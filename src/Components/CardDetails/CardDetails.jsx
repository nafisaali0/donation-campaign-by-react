import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationsCard } from "../../Utility/localStorage";
import { Helmet } from "react-helmet-async";


const CardDetails = () => {

    const cards = useLoaderData();// call json file
    const { id } = useParams(); //get id using react params

    const card = cards.find(card => card.id == id) //find the click id from all cards id
    const { price, title, description, details_image, title_color } = card //break the object property

    //set button default value false
    let buttonClicked = false;

    //remove string id for loadstorage
    const convertInt = parseInt(id)

    // condition for donation button
    const handleAddDonation = () => {
        if (!buttonClicked) {
            saveDonationsCard(convertInt)
            toast.success("Donate Successfully")
            buttonClicked = true;
        } else {
            toast.error("You already donated")
        }
    }

    return (
        <div className="p-5 container mx-auto">
            <Helmet>
                <title>Card Details | Donation Campaign</title>
            </Helmet>
            <div className="relative">
                <figure><img className='w-full rounded-xl my-5 ' src={details_image} alt='card' /></figure>
                <div className="absolute w-full bottom-0 h-16 md:h-24 p-5  bg-[#0B0B0B80] ">
                    <button onClick={handleAddDonation} className="px-3 py-2 md:px-4 md:py-3 rounded-md text-white text-xl" style={{ background: title_color }}>Donate ${price}</button>
                </div>
            </div>
            <div className="text-[#0B0B0B]">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-xl">{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};


export default CardDetails;