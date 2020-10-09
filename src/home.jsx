import React from "react"
import logo from "./logo.png";
import CalcInput from "./calcInputs"

class Home extends React.Component {
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

    handleSubmit() {


        try {
            alert(this.state.bagsOfCorn)
        } catch (error) {
            alert(error)
        }



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
                            <CalcInput onSubmitHandler={this.handleSubmit} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home