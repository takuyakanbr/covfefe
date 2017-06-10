
import React from 'react';
import loadGrammer from '../util/parser';
import generate from '../util/generator';
import BasePage from './base';
import OutputArea from '../component/outputArea';
import Toolbar from '../component/toolbar';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      texts: [],
      showOptions: false,
      generatedWords: true,
      combinedWords: true,
      covfefeWords: true,
      appendNumbers: false
    };
    this.generatedWords = true;
    this.combinedWords = true;
    this.covfefeWords = true;
    this.appendNumbers = false;
    this.count = 18;

    loadGrammer((grammar) => {
      this.grammar = grammar;
      this.generateOutput();
    }, (code) => {
      this.error = code;
    });
  }

  generateOutput() {
    // determine what types to generate
    let start = [];
    if (this.generatedWords) {
      start.push('@genword');
      start.push('@genword');
    }
    if (this.combinedWords) {
      start.push('@comword');
      start.push('@comword');
    }
    if (this.covfefeWords)
      start.push('@covfefe');
    if (this.appendNumbers)
      for (let i = 0; i < start.length; i++)
        start[i] = start[i] + '_n';

    const texts = generate(this.grammar, start, this.count);
    this.setState({ texts });
  }

  onGenerateButtonClick(e) {
    e.preventDefault();
    this.generateOutput();
  }

  onOptionsButtonClick(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return { showOptions: !prevState.showOptions };
    });
  }

  onCheckboxChange(label, e) {
    switch (label) {
    case 1:
      this.setState({ generatedWords: e.target.checked });
      this.generatedWords = e.target.checked;
      break;
    case 2:
      this.setState({ combinedWords: e.target.checked });
      this.combinedWords = e.target.checked;
      break;
    case 4:
      this.setState({ covfefeWords: e.target.checked });
      this.covfefeWords = e.target.checked;
      break;
    case 3:
      this.setState({ appendNumbers: e.target.checked });
      this.appendNumbers = e.target.checked;
      break;
    }
    this.generateOutput();
  }

  render() {
    return (
      <BasePage>
        <Toolbar onGenerate={ (e) => this.onGenerateButtonClick(e) }
                 onOptions={ (e) => this.onOptionsButtonClick(e) }
                 onCheckboxChange={ (label, e) => this.onCheckboxChange(label, e) }
                 { ...this.state } />
        <OutputArea texts={ this.state.texts }/>
        <div className="endquote">
          <span className="huge">&rdquo;</span>
        </div>
      </BasePage>
    );
  }
}

export default MainPage;
