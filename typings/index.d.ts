/// <reference path="globals/react-dom/index.d.ts" />
/// <reference path="globals/react/index.d.ts" />
declare module "react-date-range" {
    import * as React from 'react';

    export interface IDateRangeProps {
        onChange: Function;
        endDate: Object;
        startDate: Object;
    }

    export class DateRange extends React.Component<IDateRangeProps, {}> {
    }
    
    export default DateRange;
}