
class Searchcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sample_number :'',
      wras_app_number:''
    };
    this.samplechange = this.samplechange.bind(this);
    this.wraschange = this.wraschange.bind(this);
  }
  samplechange(e){
    this.setState({sample_number:e.target.value});

  }
  wraschange(e){
    this.setState({wras_app_number:e.target.value});
  }
  render(){
    return (<div>
      <div className="panel panel-primary" >
                                      <div className="panel-heading" >
                                          <h3 className="panel-title">
                                              <span className="glyphicon glyphicon-search"></span> {this.props.title}
                                          </h3>
                                      </div>
                                      <div className="panel-body"  style={{'overflow-y': 'scroll', 'height':' 500px'}}>
                                          <h3 className="panel-title">Search by Sample Number</h3>
                                          <div className="form-group">
                                              <input className="form-control" placeholder="Enter Sample Number"
                                                     type="text"  required="required"  ref="sample_search" onChange={this.samplechange}/>
                                          </div>
                                          <Actionmodal sample_number={this.state.sample_number} searchtype="sample"/>

                                          <br/>

                                      </div>
                                  </div>
      </div>);
  }
}

ReactDOM.render(<Searchcomponent title="Search Files"/>,document.getElementById('search_app'));
