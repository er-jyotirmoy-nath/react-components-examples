
 class Countmsg extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {
      msg_count_details:<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>,
      tast_details:<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
    };
    this.getCountMsg = this.getCountMsg.bind(this);
    this.getTaskCount = this.getTaskCount.bind(this);
   }
   componentWillMount() {
     this.getCountMsg();
     this.getTaskCount();
   }
   componentWillUpdate(nextProps, nextState) {
     console.clear();
     console.log("Component Will Update");
   }
   componentDidUpdate(prevProps, prevState) {
     console.log("Component Did Update"
   );
   }
   getTaskCount(){
     var send_data = {get_task_count: "get_comments"};var self = this;var task_details='';
     const request = window.superagent;
     request.post('model/msg-dashboard/msgSide1.php')
         .send(send_data)
         .end(function(err,response){
             if(err){console.error(err);}else{
              response = JSON.parse(response.text);
              task_details = response.map((item) => {
                return <li ><label>{item.PM} ({item.ALLCOUNT}) <font style={{'color':'red'}}>({item.STEP1COUNT})</font></label></li>;
              });
              self.setState({task_details:task_details});
             }
         });
   }
   getCountMsg(){
     var send_data = {get_msg_count: "get_comments"};var self = this;var count_details='';
     const request = window.superagent;
     request.post('model/msg-dashboard/msgSide1.php')
         .send(send_data)
         .end(function(err,response){
             if(err){console.error(err);}else{
              response = JSON.parse(response.text);
              count_details = response.map((item) => {
                return <li ><label>{item.topic} ({item.count})</label></li>;
              });
              self.setState({msg_count_details:count_details});
             }
         });
   }
   setViewed(e){
      e.preventDefault();
      var send_data = {set_viewed_msg: "set_viewed_msg"};var self = this;
      const request = window.superagent;
      request.post('model/msg-dashboard/msgSide1.php')
          .send(send_data)
          .end(function(err,response){
              if(err){console.error(err);}else{
               response = JSON.parse(response.text);
               self.getCountMsg();
              }
          });
   }
    render() {
        return (
          <div>
            <ul style={{"padding": "8px","margin": "5px","font-size": "12px"}}>
                {this.state.msg_count_details}
                Mark Internal Messages <a href="" onClick={this.setViewed.bind(this)} ><i className="fa fa-check-circle-o" aria-hidden="true"></i></a>
            </ul>
            <hr/>
                <label style={{"padding": "8px","margin": "5px","font-size": "12px"}}><u>Project Managers</u></label>
                <br/><i className="fa fa-bookmark" aria-hidden="true" style={{"color": "#ed1c25"}}></i> - Step 1 Files
                <ul style={{"padding": "8px","margin": "5px","font-size": "12px"}}>
                    {this.state.task_details}
                </ul>
          </div>
        );
    }
}
ReactDOM.render(<Countmsg />,document.getElementById('countMsg'));
