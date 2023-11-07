import React from "react";
import './quotes.css';
import axios from "axios"; 

class Quotes extends React.Component{
    state = { advice: '' };

    componentDidMount(){
       this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) =>{
                const {advice} = response.data.slip;
                console.log(advice);
                this.setState({advice});
            })
            .catch((error) =>{
                console.log(error)
            });
    }
    render(){
        const {advice} = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h2 className="heading">{advice}</h2>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Quotes;