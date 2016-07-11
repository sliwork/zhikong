import React from 'react';
import { Link } from "react-router";
import {Panel, Table, DropdownButton, MenuItem, Pagination} from 'react-bootstrap';

var Tables = React.createClass({
	getInitialState: function() {
		return {
		activePage1: 1,
		activePage2: 4,
		activePage3: 3,
		};
	},
  render: function() {
    return (

      <div>
      	<pageheader pagename="Table" subtitle="Bootstrap UI Elements"></pageheader>
				<div className="conter-wrapper">				
					<div className="row">
						<div className="col-md-13">
							<Panel header={<span>Regular Table</span>}
								bsStyle="primary"
							>
								<Table>
									<thead>
										<tr>
											<th>姓名</th>
											<th>性別</th>
											<th>手机号码</th>
											<th>操作</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>张三</td>
											<td>男</td>
											<td>1122334455</td>
											<td>
												<DropdownButton title="调查" bsStyle="primary" className="btn-rounded" >
													<MenuItem eventKey="1">基线调查</MenuItem>
													<MenuItem eventKey="2">过程管理</MenuItem>
													<MenuItem eventKey="3">运动干预后评估</MenuItem>
													<MenuItem divider />
					        					</DropdownButton>
											</td>
										</tr>
										<tr>
											<td>李四</td>
											<td>男</td>
											<td>1122334455</td>
											<td>
												<DropdownButton title="调查" bsStyle="primary" className="btn-rounded" >
													<MenuItem eventKey="1">基线调查</MenuItem>
													<MenuItem eventKey="2">过程管理</MenuItem>
													<MenuItem eventKey="3">运动干预后评估</MenuItem>
													<MenuItem divider />
					        					</DropdownButton>
											</td>
										</tr>
										<tr>
											<td>王五</td>
											<td>男</td>
											<td>1122334455</td>
											<td>
												<DropdownButton title="调查" bsStyle="primary" className="btn-rounded" >
													<MenuItem eventKey="1">基线调查</MenuItem>
													<MenuItem eventKey="2">过程管理</MenuItem>
													<MenuItem eventKey="3">运动干预后评估</MenuItem>
													<MenuItem divider />
					        					</DropdownButton>
											</td>
										</tr>
										<tr>
											<td>刘麻子</td>
											<td>男</td>
											<td>1122334455</td>
											<td>
												<DropdownButton title="调查" bsStyle="primary" className="btn-rounded" >
													<MenuItem eventKey="1">基线调查</MenuItem>
													<MenuItem eventKey="2">过程管理</MenuItem>
													<MenuItem eventKey="3">运动干预后评估</MenuItem>
													<MenuItem divider />
					        					</DropdownButton>
											</td>
										</tr>
									</tbody>
								</Table>
							</Panel>
						</div>
						<div className="col-md-13">
							<div className="pull-right">
								<Pagination
								prev
								next
								first
								last
								activePage={this.state.activePage3}
								items={20}
								maxButtons={5}
								bsSize="small" 
								onSelect={this.handleSelect3} />
							</div>
						</div>
					</div>	
				</div>
			</div>
    );
  }

});

export default Tables;