import {init, registerMap} from 'echarts';
import usStateMap from './usStateMap.json'

export default(node, option, renderer) => {

    registerMap('US', usStateMap);

    const chart = init(node, 'none', {renderer: 'svg'});   

	chart.setOption(option);
      
    let resizeObserver
    const containerElement = document.querySelector('div.content > article')
    const resizeChart = () => {
        chart.resize({
            animation: {
                duration: 500
            }
        })
    }
    
    if (window.ResizeObserver && containerElement) {
        resizeObserver = new ResizeObserver(resizeChart)
        resizeObserver.observe(containerElement)
    } else {
        window.addEventListener("resize", resizeChart);
    }

    return {
		update(option){
			chart.setOption(option, true, true);
		},
        destroy() {
            if (resizeObserver) {
                resizeObserver.unobserve(containerElement)
            } else {
                window.removeEventListener("resize", resizeChart)
            }
            chart.dispose();
		}
	};
}




  
