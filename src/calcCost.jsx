import React from "react"

const CalcCost = (props) => {
    function currencyCost() {
        const formatter = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2
          });

        const price = props.numberOfTrips * .5;

        return props.numberOfTrips + " return trip costs: " + formatter.format(price);
    }

    return (
        <div>{currencyCost()}</div>
    )
}

export default CalcCost