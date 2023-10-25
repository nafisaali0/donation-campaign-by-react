import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonationCard } from "../../Utility/localStorage";
import { Helmet } from "react-helmet-async";

const Donation = () => {

    const cards = useLoaderData(); //load json file
    const [donatedCard, setDonatedCard] = useState([]) //create state for store donated card and access it all over
    const [dataLength, setDataLength] = useState(4); // state for slice for (show all) button and for compare it with all data length

    useEffect(() => {

        const storelocalStorageCard = getStoredDonationCard();//store localStorage data in variable
        const donateCardId = [] //emty array to store only donated card from total cards

        if (cards.length > 0) {

            for (const id of storelocalStorageCard) {
                const card = cards.find(cardId => cardId.id === id)

                if (card) {
                    donateCardId.push(card)
                }
            }

        } setDonatedCard(donateCardId)
    }, [])
    console.log(donatedCard)
    return (
        <div className="container mx-auto mt-24 p-3">
            <Helmet>
                <title>Donation | Donation Campaign</title>
            </Helmet>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10 mb-10">
                {
                    donatedCard.slice(0, dataLength).map(donateCard =>
                        <div key={donateCard.id} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{ background: donateCard.category_bg }}>
                            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                <img
                                    src={donateCard.card_image}
                                    alt="image"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <button className="text-center font-semibold w-24 px-3 py-2 rounded-md mb-3" style={{ color: donateCard.category_text, background: donateCard.category_bg }}>{donateCard.category_name}</button>
                                <p className='font-bold mb-3' style={{ color: donateCard.title_color }}>{donateCard.title}</p>
                                <p className='font-bold mb-3' style={{ color: donateCard.title_color }}>{donateCard.price}$</p>
                                <Link to={`/carddetails/${donateCard.id}`}>
                                    <button className="text-center font-semibold w-36 px-5 py-2 text-white rounded-md" style={{ background: donateCard.title_color }}>View Details</button>
                                </Link>
                            </div>
                        </div>
                    )

                }

            </div>
            {/* condition for (show all) button */}
            {/* ${dataLength === donatedCard.length ? 'hidden' : " "}` */}
            <div className={dataLength === donatedCard.length && 'hidden'}>
                <div className="flex justify-center items-center my-10">
                    <button onClick={() => setDataLength(donatedCard.length)} className="text-center font-semibold bg-[#009444] px-5 py-2 text-white rounded-md">See More</button>
                </div>
            </div>


        </div>
    );
};

export default Donation;
