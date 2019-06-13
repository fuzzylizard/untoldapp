class NewStory extends React.Component {

  constructor(props) {
    super(props);

    this.formFields = {};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();

    this.props.onFormSubmit(this.formFields.title.value, this.formFields.storyText.value);
    document.getElementById("new-story-form").reset();
  }

  render() {
    return(
      <form id="new-story-form">
        <input ref={input => this.formFields.title = input} placeholder='Enter a Title'/>
        <input ref={input => this.formFields.storyText = input} placeholder='Write a Story' />
        
        <button onClick={ this.handleClick }>
          Submit
        </button>
      </form>
    )
  }
}
