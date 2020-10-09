import React from "react"

const CalcCost = (props) => {
    function currencyCost() {
        if (props.numberOfTrips === 0){
            return "";
        }

        const formatter = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2
          });

        const price = props.numberOfTrips * .5;

        const trips = props.numberOfTrips === 1 ? "trip" : "trips";

        return props.numberOfTrips + " return " + trips + " costs: " + formatter.format(price);
    }

    return (
        <div>{currencyCost()}</div>
    )
}

export default CalcCost