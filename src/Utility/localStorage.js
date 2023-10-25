// check previous data have or not
const getStoredDonationCard = () => {
  const getDonationCard = localStorage.getItem('donation_cards');
  if (getDonationCard) {
    return JSON.parse(getDonationCard);
  }
  return [];
};
// to store new data
const saveDonationsCard = (id) => {
  const storeDonationCard = getStoredDonationCard();
  const exits = storeDonationCard.find(donationId => donationId === id)
  if (!exits) {
    storeDonationCard.push(id);
    localStorage.setItem('donation_cards', JSON.stringify(storeDonationCard))
    // alert("Donate Successfully")   
  }
};

export { getStoredDonationCard, saveDonationsCard };
