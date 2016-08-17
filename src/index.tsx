import * as React from "react";
import { render } from "react-dom";
import { DateRange } from "react-date-range";

interface IMyComponentState {
  startDate: Date;
  endDate: Date;
} 

class MyComponent extends React.Component<{}, {}> {
  state: IMyComponentState;
  
  constructor() {
    super();

    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(dates) {
    console.log(dates);
    
    this.setState({
      startDate: dates.startDate,
      endDate: dates.endDate, 
    });
  }
  render() {
    return (
      <div>
        <DateRange
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
 
render(<MyComponent />, document.getElementById("app"));
