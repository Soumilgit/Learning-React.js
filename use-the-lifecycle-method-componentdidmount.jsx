
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
//lifecycle method to place API calls or any 
//calls to your server
//automatically triggers update upon receiving //data
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users:{this.state.activeUsers} </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
