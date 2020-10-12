import React from "react";

class CalcInput extends React.Component {
    render() {
        var errorMessage = (this.props.isError) ? "Please enter valid values!" : "";

        return (
            <div>
                <h3 data-testid="Calc-Heading">Please select the number of bags of corn and geese...</h3>
                <fieldset>
                    <form onSubmit={this.props.onSubmitHandler}>
                        <label>Bags of corn
                            <input type="text" id="bags-of-corn" defaultValue={this.props.bagsOfCorn} />
                        </label>
                        <label>Geese
                            <input type="text" id="number-of-geese" defaultValue={this.props.numberOfGeese} />
                        </label>
                        <input type="button" value="calculate..." onClick={this.props.submitHandler} />
                    </form>
                </fieldset>
                <div>
                    {errorMessage}
                </div>
            </div>

        )
    }
}

export default CalcInput