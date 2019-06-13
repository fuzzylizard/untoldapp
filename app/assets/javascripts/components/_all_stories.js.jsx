const AllStories = (props) => {

  const stories = props.stories.map((story) => {
    return(
      <div key={story.id}>
        <h2>{story.title}</h2>
        <p>{story.story_text}</p>
      </div>
    );
  });

  return(
    <div>
      {stories}
    </div>
  )
}