import { Chart } from "react-google-charts";
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonationCard } from '../../Utility/localStorage';
import { Helmet } from "react-helmet-async";

const Statistics = () => {

    const totalCards = useLoaderData();//load json data
    const [loadCard, setLoadCard] = useState([]);

    //call load localStorage card
    useEffect(() => {
        const getLoadCard = getStoredDonationCard([]);
        setLoadCard(getLoadCard)//set it to state
    }, [])

    const donatedPercentage = (loadCard.length / totalCards.length) * 100;//calculate percentage for donated card

    const totalCardPt = 100 - donatedPercentage;//calculate percentage for total card after donate

    // pass percntage value for chart
    const data = [
        ["Task", "Percentage"],
        ["Your Donation", donatedPercentage],
        ["Total Donation", totalCardPt],
    ];

    const chartColors = ["#00C49F", "#FF444A"]
    const options = {
        title: "Donation Statistics",
        is3D: true,
        colors: chartColors,
    };
    return (
        <div className='container mx-auto mt-52'>
            <Helmet>
                <title>Static | Donation Campaign</title>
            </Helmet>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};


export default Statistics;