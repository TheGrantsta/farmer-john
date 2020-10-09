import React from "react";

class CalcInput extends React.Component {
    
    render() {
        return (
            <div>
                <h3 data-testid="Calc-Heading">Select the number of bags of corn and geese...</h3>
                <fieldset>
                    <form onSubmit={this.props.onSubmitHandler}>
                        <label>Bags of corn
                        <select value={this.props.bagsOfCorn} onChange={this.props.changeCornHandler}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </label>
                        <label>Geese
                        <select value={this.props.numberOfGeese} onChange={this.props.changeGreeseHandler}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </label>
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default CalcInput