import { Draggable, Droppable } from 'react-drag-and-drop'
import React, { Component } from 'react';
import './App.css';

export default class App extends React.Component {
    render() {
        return(
        <div>
            <ul>
                <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
                <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
                <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
            </ul>
            <Droppable
                types={['fruit']} 
                onDrop={this.onDrop.bind(this)}>
                <ul className="Smoothie drag"></ul>
            </Droppable>
        </div>
        )
    }
    onDrop(data) {
        console.log(data)
        // => banana 
    }
}