import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import Note from './components/Note.jsx';
import Footer from './components/Footer.jsx';
import "./stylesheet/styles.css";

function App() {

    var [array, changeArray] = useState([]);

    function addItem(input){
        changeArray(function(previousArrayValue) {
            return [...previousArrayValue, input]
        });
    }

    function deleteItem(input){
        changeArray(
            array.filter(function(value, index) {
                return input !== index;
            })
        );
    }

    return (
        <div>
            <Header />
            <Input addItem={addItem}/>
            <Note array={array} deleteItem={deleteItem}/>
            <Footer />
        </div>
    );
}

export default App;