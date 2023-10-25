import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";

const CategoryCard = () => {
    
    const [cards, setCards] = useState([]); //store all cards
    const [filterCards, setFilterCards] = useState([]) //store all cards for filter
    
    // call json file
    useEffect(() => {
        fetch('cards.json')
            .then(res => res.json())
            .then(data => {
                setCards(data);
                setFilterCards(data);
            })
    }, [])
    
    // add condtion in handleSearch for filter 
    const handleSearch = (e) => {
        if (e === 'all') {
            setFilterCards(cards)
        } else if (e === 'health' || e === 'Health') {
            const health = cards.filter(card => card.category_name === 'Health');
            setFilterCards(health)
        } else if (e === 'education' || e === 'Education') {
            const education = cards.filter(card => card.category_name === 'Education');
            setFilterCards(education)
        } else if (e === 'cloth' || e === 'Cloth' || e === 'clothing' || e === 'Clothing') {
            const cloth = cards.filter(card => card.category_name === 'Clothing');
            setFilterCards(cloth)
        } else if (e === 'food' || e === 'Food') {
            const food = cards.filter(card => card.category_name === 'Food');
            setFilterCards(food)
        }
    }
   
    return (
        <>
            <Banner handleSearch={handleSearch} /> 
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 p-5 mb-5 mt-10">
                    {
                        filterCards.map(card => <Card key={card.id} card={card}></Card>)
                    }
                </div>
            </div>
        </>
    );

};



export default CategoryCard;