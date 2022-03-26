import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./QnA.css"
const QnA = () => {
    return (
        <div class="container py-5">
            <div class="row">
                <header>
                    <h1 class="text-center text-primary"> <q>Q & A</q> </h1>
                </header>
                <div class="col-md-6 py-3 ">
                    {/* <h2> How React Works..?</h2>
                    <p class="pe-5 fs-5"> Nowadays React is popular front-end JavaScript library, Actually It works in browser, React creates a virtual DOM. When state changes in a component it firstly runs a <strong>“diff”</strong> algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.</p> */}
                </div>
                <div class="col-md-6 py-3">
                    {/* <h2> How UseState() Works..?</h2>
                    <p class="pe-5 fs-5"> Actually useState() is a React Hook its allow to declare state variables in functional components. its works by pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p> */}
                </div>
            </div>
        </div>
    );
};

export default QnA;