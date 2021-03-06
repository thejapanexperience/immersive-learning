import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
// import { TextField } from 'material-ui';

import * as DeckActions from '../actions/DeckActions';

@connect(
  state => ({
  }),
  dispatch => ({
    addDeck(deck) {
      dispatch(DeckActions.addDeck(deck));
    },
  })
)
export default class CreateDeck extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    }

    this._onSubmit = this._onSubmit.bind(this);
    this.incrementQuestionCount = this.incrementQuestionCount.bind(this);
  }

  _onSubmit(e) {
    e.preventDefault();
    const { count } = this.state;
    const { deckName, deckDescription } = this.refs;
    const { Question1, Answer1A, Answer1B, Answer1C, Answer1D } = this.refs;
    const question1 = {
      question: { text: Question1.value },
      answers: [Answer1B.value, Answer1A.value, Answer1C.value, Answer1D.value],
      correct: 1
    }
    let question2, question3, question4, question5;
    if (count >= 2) {
      const { Question2, Answer2A, Answer2B, Answer2C, Answer2D } = this.refs;
      question2 = {
        question: { text: Question2.value },
        answers: [Answer2B.value, Answer2D.value, Answer2A.value, Answer2C.value],
        correct: 2,
      }
    }
    if (count >= 3) {
      let { Question3, Answer3A, Answer3B, Answer3C, Answer3D } = this.refs;
      question3 = {
        question: { text: Question3.value },
        answers: [Answer3B.value, Answer3A.value, Answer3C.value, Answer3D.value],
        correct: 1,
      }
    }
    if (count >= 4) {
      const { Question4, Answer4A, Answer4B, Answer4C, Answer4D } = this.refs;
      question4 = {
        question: { text: Question4.value },
        answers: [Answer4B.value, Answer4C.value, Answer4D.value, Answer4A.value],
        correct: 3,
      }
    }
    if (count >= 5) {
      const { Question5, Answer5A, Answer5B, Answer5C, Answer5D } = this.refs;
      question5 = {
        question: { text: Question5.value },
        answers: [Answer5A.value, Answer5D.value, Answer5C.value, Answer5B.value],
        correct: 0,
      }
    }

    const questions = [];

    for (let i = 1; i <= count; i++) {
      if (i === 1) questions.push(question1);
      if (i === 2) questions.push(question2);
      if (i === 3) questions.push(question3);
      if (i === 4) questions.push(question4);
      if (i === 5) questions.push(question5);
    }

    const deck = {
      id: uuid(),
      name: deckName.value,
      description: deckDescription.value,
      questions,
    }

    this.props.addDeck(deck);
  }

  incrementQuestionCount() {
    const { count } = this.state;
    if (count < 5) {
      this.setState({ count: count + 1 })
    }
  }

  render() {
    const { count } = this.state;
    // console.log('count:', count);
    let display2 = {
      display: 'none',
    }
    if (count >= 2) {
      display2 = {
        display: 'block',
      }
    }
    let display3 = {
      display: 'none',
    }
    if (count >= 3) {
      display3 = {
        display: 'block',
      }
    }
    let display4 = {
      display: 'none',
    }
    if (count >= 4) {
      display4 = {
        display: 'block',
      }
    }
    let display5 = {
      display: 'none',
    }
    if (count >= 5) {
      display5 = {
        display: 'block',
      }
    }

    return (
      <div className="container">
        <h1 className="text-center">Create A New Deck</h1>
        <form onSubmit={this._onSubmit}>
        <div className="form-group">
          <label>Deck Name</label>
          <input type="text" className="form-control" ref="deckName" id="deckName" placeholder="Enter Deck Name" />
          <small className="form-text text-muted" />
          <label>Description</label>
          <input type="text" className="form-control" ref="deckDescription" placeholder="Enter Deck Name" />
        </div>
        <div className="form-group">
          <label>Question Name</label>
          {/* <TextField
              hintText="Enter a Question"
              multiLine={true}
              rows={2}
              rowsMax={4}
              ref={`Question${1}`}
              /> */}
            <input type="text" className="form-control" ref={`Question${1}`} id="questionName" placeholder="Enter a Question" />
            <label>Correct Answer</label>
            <input className="form-control" ref={`Answer${1}A`} rows="2" />
            <label>Incorrect Answer 1</label>
            <input className="form-control" ref={`Answer${1}B`} rows="2" />
            <label>Incorrect Answer 2</label>
            <input className="form-control" ref={`Answer${1}C`} rows="2" />
            <label>Incorrect Answer 3</label>
            <input className="form-control" ref={`Answer${1}D`} rows="2" />
          </div>
          <div className="form-group" style={display2}>
            <label>Question Name</label>
            <input type="text" className="form-control" ref={`Question${2}`} id="questionName" placeholder="Enter a Question"/>
            <label>Correct Answer</label>
            <input className="form-control" ref={`Answer${2}A`} rows="2" />
            <label>Incorrect Answer 1</label>
            <input className="form-control" ref={`Answer${2}B`} rows="2" />
            <label>Incorrect Answer 2</label>
            <input className="form-control" ref={`Answer${2}C`} rows="2" />
            <label>Incorrect Answer 3</label>
            <input className="form-control" ref={`Answer${2}D`} rows="2" />
          </div>
          <div className="form-group" style={display3}>
            <label>Question Name</label>
            <input type="text" className="form-control" ref={`Question${3}`} id="questionName" placeholder="Enter a Question" />
            <label>Correct Answer</label>
            <input className="form-control" ref={`Answer${3}A`} rows="2" />
            <label>Incorrect Answer 1</label>
            <input className="form-control" ref={`Answer${3}B`} rows="2" />
            <label>Incorrect Answer 2</label>
            <input className="form-control" ref={`Answer${3}C`} rows="2" />
            <label>Incorrect Answer 3</label>
            <input className="form-control" ref={`Answer${3}D`} rows="2" />
          </div>
          <div className="form-group" style={display4}>
            <label>Question Name</label>
            <input type="text" className="form-control" ref={`Question${4}`} id="questionName" placeholder="Enter a Question" />
            <label>Correct Answer</label>
            <input className="form-control" ref={`Answer${4}A`} rows="2" />
            <label>Incorrect Answer 1</label>
            <input className="form-control" ref={`Answer${4}B`} rows="2" />
            <label>Incorrect Answer 2</label>
            <input className="form-control" ref={`Answer${4}C`} rows="2" />
            <label>Incorrect Answer 3</label>
            <input className="form-control" ref={`Answer${4}D`} rows="2" />
          </div>
          <div className="form-group" style={display5}>
            <label>Question Name</label>
            <input type="text" className="form-control" ref={`Question${5}`} id="questionName" placeholder="Enter a Question"/>
            <label>Correct Answer</label>
            <input className="form-control" ref={`Answer${5}A`} rows="2" />
            <label>Incorrect Answer 1</label>
            <input className="form-control" ref={`Answer${5}B`} rows="2" />
            <label>Incorrect Answer 2</label>
            <input className="form-control" ref={`Answer${5}C`} rows="2" />
            <label>Incorrect Answer 3</label>
            <input className="form-control" ref={`Answer${5}D`} rows="2" />
          </div>
          <button type="button" className="btn btn-primary" onClick={this.incrementQuestionCount}>Add Another Question</button>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">Create Deck</button>
        </form>
      </div>
      )
    }
  }
