
import React, { useState } from "react";
import './quotesDisplay.css'

const QuotesDisplayFunction= () =>{
    const [cardDisplay, setCardDisplay] = useState()
    const[index, setIndex] = useState(0)
    const[count, setCount] = useState(1)
    const [message, setMessage] = useState('')
   
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Life is really simple, but we insist on making it complicated. - Confucius",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "In the middle of every difficulty lies opportunity. - Albert Einstein",
        "Life is a journey that must be traveled no matter how bad the roads and accommodations. - Oliver Goldsmith",
        "Don't count the days, make the days count. - Muhammad Ali",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
        "Life is really simple, but we insist on making it complicated. - Confucius",
        "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
        "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
        "Life is about making an impact, not making an income. - Kevin Kruse",
        "The best revenge is massive success. - Frank Sinatra",
        "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
        "You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius",
        "Life is change, growth is optional. Choose wisely. - Karen Kaiser Clark",
        "You don't have to be rich to sparkle. - Unknown",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "If you want to achieve greatness stop asking for permission. - Anonymous",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Life is what happens when you're busy making other plans. - John Lennon"
      ];
      
    
   
    function saveFunction(event){
        setMessage(event.target.value);
       quotes.push(message) 
       console.log(message);
      
    }
    function nextFunction(){
        
        if (index < quotes.length ){
            setIndex(parseInt(index) + 1)
            setCardDisplay(disp())
        }
    }
    function previousFunction(){
        if (index > 0){
            setIndex(index - 1)
            setCardDisplay(disp)
        }
    
    }
    function disp(){
        let value =  quotes[index] 
        console.log(value);

        return <div className="outerCardBox">
            <div className="innerCardBox">
                <div className="quoteSession">
                    <p className="quotes">
                        {value}
                    </p>
                </div>
            </div>
        </div>
    }
    return(
        <div className="carryingDiv">
            <div className="textDiv">
                <textarea name="" id="" cols="30" rows="10" className="text"
                value={message}
                onChange={saveFunction}
                />
            </div>
            <div className="buttonsDiv">
                <button className="savedQuoteButton" onClick={saveFunction}>Save Quote</button>
                <button className="nextQuoteButton" onClick={nextFunction}>Next Quote</button>
                <button className="prevQuoteButton" onClick={previousFunction}>Previous Quote</button>
            </div>
            <div className="displayDiv">
              <p>{cardDisplay}</p>  
            </div>
        </div>
    )
}
export default QuotesDisplayFunction