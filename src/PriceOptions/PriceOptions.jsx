import PriceOption from "../Components/PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Starter Pack",
            "price": 19,
            "features": [
                "Access to cardio equipment",
                "Limited access to weight machines",
                "Access to basic group classes",
                "Fitness assessment upon signup",
                "Discounts on protein shakes at the gym's cafe"
            ]
        },
        {
            "id": 2,
            "name": "Silver Membership",
            "price": 39,
            "features": [
                "Full access to cardio and weight equipment",
                "Access to all group classes",
                "One free session with a personal trainer per month",
                "Monthly fitness progress tracking",
                "10% off on gym merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Gold Membership",
            "price": 59,
            "features": [
                "All features of Silver Membership",
                "Unlimited personal training sessions",
                "Access to sauna and steam room",
                "Discounts on gym merchandise",
                "Nutritional consultation with a dietitian"
            ]
        },
        {
            "id": 4,
            "name": "Platinum Membership",
            "price": 99,
            "features": [
                "All features of Gold Membership",
                "Nutrition counseling sessions",
                "Access to exclusive member events",
                "Priority booking for classes and facilities",
                "Complimentary massage session per month"
            ]
        }
    ];


    return (
        <div className="m-12">
            <h1 className="text-5xl">Best Prices in the town</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
                
            </div>
        </div>
    );
};

export default PriceOptions;