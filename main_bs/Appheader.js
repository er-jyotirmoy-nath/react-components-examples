/*
 * The code on this file is licensed to NSF International
 * All rights reserved
 */
class Appheader extends React.Component {
            constructor(){
                super();

                this.state = {
                    sampleawait : 0,
                    sampleontest:0,
                    awaitreport:0,
                    reportnotnotified:0
                };


            }

            render(){

                return (
                    <div>
                          <div className="row">
                                    <div className="col-lg-6" >
                                        <h2 className="page-header">
                                            <i className="fa fa-tachometer" aria-hidden="true"></i> {this.props.title} <small>Statistics
                                                Overview</small>
                                        </h2>

                                    </div>
                                    <div className="col-lg-6">

                                    </div>
                                </div><hr/>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="panel panel-green" style={{'borderColor': 'cornflowerblue'}}>
                                            <div className="panel-heading" style={{'color': '#fff','backgroundColor': 'cornflowerblue','borderColor': '#ddd'}}>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <i className="fa fa-clock-o fa-5x" aria-hidden="true"></i>
                                                    </div>
                                                    <div className="col-xs-9 text-right">
                                                        <div className="huge" >{this.props.sampleawaitcount}</div>
                                                        <div>Samples Awaiting Checks</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#sac_tab" style={{'color':'cornflowerblue'}}>
                                                <div className="panel-footer">
                                                    <span className="pull-left">View Details</span>
                                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="panel panel-green" style={{'borderColor': '#009688'}}>
                                            <div className="panel-heading" style={{'borderColor': '#009688','color': 'white','backgroundColor': '#009688'}}>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <i className="fa fa-thermometer-empty fa-5x"></i>
                                                    </div>
                                                    <div className="col-xs-9 text-right">
                                                        <div className="huge" >{this.props.sampleontestcount}</div>
                                                        <div>Samples on Test</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#sot_tab">
                                                <div className="panel-footer">
                                                    <span className="pull-left">View Details</span>
                                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="panel panel-yellow" style={{'borderColor': '#FF9800'}}>
                                            <div className="panel-heading" style={{'borderColor': '#FF9800','color': 'white','backgroundColor': '#FF9800'}}>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <i className="fa fa-question-circle-o fa-5x"></i>
                                                    </div>
                                                    <div className="col-xs-9 text-right">
                                                        <div className="huge" >{this.props.awaitreportcount}</div>
                                                        <div>Awaiting Report</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#ar_tab">
                                                <div className="panel-footer">
                                                    <span className="pull-left">View Details</span>
                                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="panel panel-red" style={{'borderColor': '#607D8B'}}>
                                            <div className="panel-heading" style={{'borderColor': '#607D8B','color': 'white','backgroundColor': '#607D8B'}}>
                                                <div className="row">
                                                    <div className="col-xs-3">
                                                        <i className="fa fa-bell-o fa-5x" aria-hidden="true"></i>
                                                    </div>
                                                    <div className="col-xs-9 text-right">
                                                        <div className="huge" >{this.props.reportnotnotifiedcount}</div>
                                                        <div>Reported & Not Notified</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#rnn_tab" style={{'color':'#607D8B'}}>
                                                <div className="panel-footer">
                                                    <span className="pull-left">View Details</span>
                                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    );
            }
        }
