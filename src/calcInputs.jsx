import React from "react";

class CalcInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bagsOfCorn: 0,
            numberOfGeese: 0
        };

        this.handleChangeCorn = this.handleChangeCorn.bind(this);
        this.handleChangeGeese = this.handleChangeGeese.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeCorn(event) {
        this.setState({ bagsOfCorn: event.target.value });
    }

    handleChangeGeese(event) {
        this.setState({ numberOfGeese: event.target.value });
    }

    handleSubmit(event) {
        alert("Submitted values\nBags of Corn: " + this.state.bagsOfCorn + "\nGeese: " + this.state.numberOfGeese);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3 data-testid="Heading">Select the number of bags of corn and geese...</h3>
                <fieldset>
                    <form onSubmit={this.handleSubmit}>
                        <label>Bags of corn
                        <select value={this.state.bagsOfCorn} onChange={this.handleChangeCorn}>
                                <option value="0" defaultValue="0">0</option>
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
                        <select value={this.state.numberOfGeese} onChange={this.handleChangeGeese}>
                                <option value="0" defaultValue="0">0</option>
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
                        <input type="submit" id="calc-submit" value="calculate..." />
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default CalcInput