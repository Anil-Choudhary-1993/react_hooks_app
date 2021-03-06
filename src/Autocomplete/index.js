import React from 'react';
import './index.css';

const Data = [
  "Mango",
  "Grapes",
  "Musk",
  "Banana",
  "grapes",
  "lime",
  "lemon",
  "cherry",
  "blueberry",
  "apple",
  "watermelon"
];

export default function Autocomplete({ suggestions = Data }) {
  let suggRef = React.useRef();
  let [state, setState] = React.useState({
    showSuggestion: false,
    filteredSuggestions: [],
    input: '',
    currentSuggestionIndex: -1
  });

  const handleChange = (e) => {
    let input = e.target.value.trim(),
      showSuggestion = false,
      filteredSuggestions = [],
      currentSuggestionIndex = -1;
    if (input) {
      filteredSuggestions = suggestions.filter(v => v.toLowerCase().indexOf(input.toLowerCase()) > -1);
      showSuggestion = true;
    }

    setState({
      ...state,
      showSuggestion,
      input,
      filteredSuggestions,
      currentSuggestionIndex
    })
  }

  const selectWord = (value) => {
    setState({
      input: value,
      showSuggestion: false,
      filteredSuggestions: [],
      currentSuggestionIndex: -1
    })
  }

  const onkeyDown = (e) => {
    if (e.keyCode === 13) {
      setState({
        input: state.filteredSuggestions[state.currentSuggestionIndex],
        showSuggestion: false,
        filteredSuggestions: [],
        currentSuggestionIndex: 0
      })
    } else if (e.keyCode === 38) {
      let currentSuggestionIndex = state.currentSuggestionIndex;
      if (currentSuggestionIndex > 0) {
        currentSuggestionIndex--;
      }
      if (suggRef?.current?.scrollTop != undefined) {
        if (currentSuggestionIndex === 0) {
          suggRef.current.scrollTop = 0;
        } else {
          suggRef.current.scrollTop -= 20;
        }
      }
      setState({
        ...state,
        currentSuggestionIndex
      })
    } else if (e.keyCode === 40) {
      let currentSuggestionIndex = state.currentSuggestionIndex;
      if (currentSuggestionIndex < state.filteredSuggestions.length - 1) {
        currentSuggestionIndex++;
      }
      if (suggRef?.current?.scrollTop != undefined) {
        if (currentSuggestionIndex === state.filteredSuggestions.length - 1) {
          suggRef.current.scrollTop = suggRef.current.scrollHeight;
        } else {
          suggRef.current.scrollTop += 20
        }
      }
      setState({
        ...state,
        currentSuggestionIndex
      })
    }
  }

  return (
    <>
      <h1>
        React Autocomplete Demo
      </h1>
      <div className="container">
        <div className="input_field">
          <input
            aria-label="autocompleteFilter"
            type="text"
            value={state.input}
            onChange={handleChange}
            onKeyDown={onkeyDown}
          />
        </div>

        {state.showSuggestion && <div className="suggestions" ref={suggRef}>
          <ul>
            {
              state.filteredSuggestions.map((sug, index) => <li
                key={index}
                onClick={() => selectWord(sug)}
                className={state.currentSuggestionIndex === index ? 'highlight' : ''}
              >
                {sug}
              </li>)
            }
          </ul>
        </div>
        }
      </div>
    </>
  )
}

