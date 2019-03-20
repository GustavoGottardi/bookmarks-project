import React from 'react';

class TagInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            focused: false,
            input: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleTagsArray = this.props.handleTagsArray;
    }

    componentWillReceiveProps(nextProps){
        if(this.props.revision != nextProps.revision){
            this.setState({items: []});
        }
    }

    render() {
      const styles = {
        container: {
            border: '1px solid #ddd',
            padding: '0px',
            borderRadius: '5px',
        },

        items: {
            display: 'inline-block',
            padding: '0px 5px',
            backgroundColor: '#1f68c1',
            color: '#fff',
            borderRadius: '3px',
            margin: '0 5px',
            cursor: 'pointer',
            fontSize: '0.8rem'
        },

        input: {
            outline: 'none',
            border: 'none',
            width: 'inherit'
        }
      };
      return (
        <label>
          <ul style={styles.container}>
            {this.state.items.map((item, i) =>
              <li key={i} style={styles.items} onClick={this.handleRemoveItem(i)}>
                {item}
                <span>(x)</span>
              </li>
            )}
            <input
              style={styles.input}
              value={this.state.input}
              onChange={this.handleInputChange}
              onKeyDown={this.handleInputKeyDown}
              placeholder={this.props.placeholder} />
          </ul>
        </label>
      );
    }

    handleInputChange(event) {
        const {value} = event.target;
        if (value != " ") {
            this.setState({ input: event.target.value });
        }
    }

    handleInputKeyDown(event) {
        const {value} = event.target;
        if ( event.keyCode === 32 && value != "") {
            this.setState(state => ({
                items: [...state.items, value],
                input: ''
            }));
            this.handleTagsArray(this.state.items);
        }

        if ( this.state.items.length && event.keyCode === 8 && !this.state.input.length) {
            this.setState(state => ({
                items: state.items.slice(0, state.items.length - 1)
            }));
        }
    }

    handleRemoveItem(index) {
        return () => {
            this.setState(state => ({
                items: state.items.filter((item, i) => i !== index)
            }));
        }
    }
}

export default TagInput;
