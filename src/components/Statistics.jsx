import React, { Component } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';
class Statistics extends Component {
	render() {
		const piechartOptions = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Website Traffic Sources"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Direct" },
					{ y: 40, label: "Organic Search" },
					{ y: 9, label: "Paid Search" },
					{ y: 14, label: "Referral" },
					{ y: 19, label: "Social" }
				]
			}]
		}
        const barchartOptions = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Most Popular Social Networking Sites"
			},
			axisX: {
				title: "Social Network",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				includeZero: true,
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "Facebook" },
					{ y:  1800000000, label: "YouTube" },
					{ y:  800000000, label: "Instagram" },
					{ y:  563000000, label: "Qzone" },
					{ y:  376000000, label: "Weibo" },
					{ y:  336000000, label: "Twitter" },
					{ y:  330000000, label: "Reddit" }
				]
			}]
		}

		return (

            <div className='bg-white flex flex-col justify-center h-full p-10 gap-6'>
                <h1 className='font-bold font-serif text-5xl uppercase text-center m-6'>Statistics</h1>
                <div>
                    <CanvasJSChart options = {piechartOptions}
                    /* onRef={ref => this.chart = ref} */
                    />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
            
                <div>
                    <CanvasJSChart options = {barchartOptions}
                        /* onRef={ref => this.chart = ref} */
                    />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
         </div>
        
		);
	}
}
export default Statistics;                        