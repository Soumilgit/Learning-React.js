const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'c',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = null; // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
        <li key='React'>React</li>
        <li key='Angular'>Angular</li>
        <li key='Ember'>Ember</li>
        <li key='c'>c</li>
        <li key='Backbone'>Backbone</li>
        <li key='Vue'>Vue</li>
      </ul>
    </div>
  );
};
