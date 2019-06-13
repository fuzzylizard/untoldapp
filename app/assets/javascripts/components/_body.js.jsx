class Body extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      stories: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewStory = this.addNewStory.bind(this);
  }

  handleFormSubmit(title, storyText) {
    let body = JSON.stringify({
      story: {
        title: title,
        story_text: storyText
      }
    })

    fetch('/api/stories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
      .then((response) => {
        return response.json()
      })
      .then((story) => {
        this.addNewStory(story)
      })
  }

  addNewStory(story) {
    this.setState({
      stories: this.state.stories.concat(story)
    })
  }

  componentDidMount() {
    fetch('/api/stories.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ stories: data });
      });
  }

  render() {
    return(
      <div>
        <NewStory onFormSubmit={this.handleFormSubmit} />
        <AllStories stories={this.state.stories} />
      </div>
    )
  }
}