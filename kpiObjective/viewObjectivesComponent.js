class Objectivelist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            objtitle:this.props.title,
            actualvalue:this.props.actval,
            requiredvalue:this.props.reqval,
            alertstyle:this.props.alertstyle
        };

    }

    render(){
        const liststyle1 = { 'font-size':'15px'};

        const listStyle2 = { 'background-color': '#000', 'font-size': '15px' };
        return (<tr>
            <td style={liststyle1}>{this.state.objtitle}</td>
            <td><span className="badge" style={this.state.alertstyle} >{this.state.actualvalue}</span></td>
            <td><span className="badge" style={listStyle2} >{this.state.requiredvalue}</span></td>
        </tr>);
    }
}


class Viewobjectives extends React.Component{
    constructor(props){
        super(props);
        this.state={
          emp_no:'',
          epm_name:'',
          employee_kpi_data:[],
          objectivelisting:''
        };
        this.getColorCode = this.getColorCode.bind(this);
    }
    getColorCode(objective,reqval,actval){
      var alertstyle = {};
      switch (objective) {
                case "Invoice raised":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;

                case "End to End TAT":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;

                      //amber ==  red > green <
                case "Step1 to Step4 TAT":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;
                    //amber ==      					red >        				   green <

                case "(BS6920) Project Initiation":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;
                    //amber ==    				   red >     				   green <

                case "(BS6920) Agreed Timeline Success":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;
                    //amber ==     				   red <     				   green >

                case "(BS6920) Overall TAT":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;
                    //amber == 		   red >     				   green <

                case "(Prod Eval)TMV TAT":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;
                    //amber ==			   red >  				   green <

                case "(Prod Eval) Meters TAT":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;
                //    amber ==			   red >     				   green <

                case "(Prod Eval) TAT":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;
                   //amber ==				   red >     				   green <

                case "(BS6920) Invoice Raised":
                if(actval < reqval){
                  alertstyle = { 'background-color': '#ff5722', 'font-size': '15px' };
                }
                else if (actval > reqval) {
                  alertstyle = { 'background-color': '#4caf50', 'font-size': '15px' };
                }
                else{
                  alertstyle = { 'background-color': '#ffc107', 'font-size': '15px' };
                }
                break;
                    //amber ==			   red <     				   green >

                default:
                    alertstyle = { 'background-color': '#03a9f4', 'font-size': '15px' };
                   break;
            }
            return alertstyle;
    }
    componentWillMount () {
        const request = window.superagent;var self = this;var tablestring='';var temp = [];var alertstyle={ 'background-color': '#ff8c00', 'font-size': '15px' };
        let send_data = { "get_all_emp_data": "get" };
        request.post("model/emp_stat.php")
            .send(JSON.stringify(send_data))
            .end(function (err, resp) {
                if (err) { console.error(err); }
                else {
                    var newresponse = JSON.parse(resp.text);
                    temp = newresponse.employee_kpi_data.filter((item)=>{
                      return item.PM == newresponse.emp_name;
                    });
                    self.setState({'emp_no':newresponse.emp_no,emp_name:newresponse.emp_name,'employee_kpi_data':temp},()=>{


                      tablestring = self.state.employee_kpi_data.map((item) => {
                        if(item.ACTUAL_VALUE != null && item.ACTUAL_VALUE != false){
                          alertstyle = self.getColorCode(item.OBJECTIVE,item.ACTUAL_VALUE,item.SET_VALUE);
                          return <Objectivelist key={item.OBJECTIVE_ID} title={item.OBJECTIVE} actval={item.ACTUAL_VALUE} reqval={item.SET_VALUE} alertstyle={alertstyle}/>;

                        }
                      });
                    });

                    self.setState({objectivelisting:tablestring});
                }
            });
    }
    openAddObjectives(){
      window.open('add_kpi_abjectives.html', 'sharer', 'toolbar=0,status=0,width=1020,height=900');
    }
    render(){
        const listStyle = { 'background-color': '#ff8c00', 'font-size':'15px'};
        const listStyle2 = { 'background-color': '#000', 'font-size':'15px'};
        return (
            <div>

        <br/>
            <table className="table table-bordered table-striped table-hover table-responsive" >
                <thead>
                    <th>Objective</th>
                    <th>Actual Value</th>
                    <th>Required Value</th>
                </thead>
                <tbody >
                  {this.state.objectivelisting}
                </tbody>
            </table>


                <p style={{'text-align':'center'}}>
                <button className="btn btn-default"  onClick={this.openAddObjectives}>Add Objectives</button>
                </p></div>);
    }
}
