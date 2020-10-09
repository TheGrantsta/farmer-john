import React from "react"
import logo from "./logo.png";
import CalcInput from "./calcInputs"
import CalcCost from "./calcCost"

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bagsOfCorn: 0,
            numberOfGeese: 0
        };

        this.handleChangeCorn = this.handleChangeCorn.bind(this);
        this.handleChangeGeese = this.handleChangeGeese.bind(this);
    }

    handleChangeCorn(event) {
        this.setState({ bagsOfCorn: parseInt(event.target.value) });
    }

    handleChangeGeese(event) {
        this.setState({ numberOfGeese: parseInt(event.target.value) });
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
                                changeCornHandler={this.handleChangeCorn}
                                changeGreeseHandler={this.handleChangeGeese}/>
                            <CalcCost numberOfTrips={this.state.bagsOfCorn + this.state.numberOfGeese} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home