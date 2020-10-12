import React from "react"
import logo from "./logo.png";
import CalcInput from "./calcInputs"
import TripAdvisor from "./tripAdvisor"

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bagsOfCorn: 0,
            numberOfGeese: 0,
            isInError: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        var inputError = false;
        var bags = parseInt(document.getElementById("bags-of-corn").value);
        var geese = parseInt(document.getElementById("number-of-geese").value);

        if (isNaN(bags)) {
            bags = 0;
            inputError = true;
        }

        if (isNaN(geese)) {
            geese = 0;
            inputError = true;
        }

        this.setState({ bagsOfCorn: bags, numberOfGeese: geese, isInError: inputError });
    }

    render() {
        return (
            <div className="App">
                <section>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xss-12">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 data-testid="Home-Heading">Welcome Farmer John!</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xss-12">
                            <CalcInput
                                bagsOfCorn={this.state.bagsOfCorn}
                                numberOfGeese={this.state.numberOfGeese}
                                isError={this.state.isInError}
                                submitHandler={this.handleSubmit} />
                        </div>
                        <div>
                            <TripAdvisor
                                numberOfBags={this.state.bagsOfCorn}
                                numberOfGeese={this.state.numberOfGeese} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home