/**
 * #权限
 * Routes:
 *  - ./src/routes/auth-route
 *
 */

import echarts from 'echarts'
import style from './index.css'
import {useRef, useLayoutEffect, useState} from 'react'
import {added_data, healing_data} from './data'
import {Button, Row, Col} from "antd";


export default (props) => {

  const [isAddedChart, setAddedChart] = useState(true);
  const [isHealingChart, setHealingChart] = useState(false);

  const echartsDOM = useRef();

  const showAddedChart = () => {
    setAddedChart(true);
    setHealingChart(false);
  }

  const showHealingChart = () => {
    setAddedChart(false);
    setHealingChart(true);
  }

  useLayoutEffect(() => {
    const dataset = isAddedChart ? added_data : healing_data.map(d => {return {date: d.date, other: d.other}});
    const yAxisName = isAddedChart ? '新增病例' : '治愈人数';
    const series = isAddedChart ?
      [
        {type: 'line'},
        {type: 'line'},
        {type: 'line'},
      ]
      :
      [
        {type: 'line'}
      ]

    const map = echarts.init(echartsDOM.current);
    const option = {
      legend: {
        formatter: (name) => {
          console.log(name)
          const map = {'all': '全国', 'hb': '湖北', 'other': '非湖北'};
          return map[name];
        },
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          interval: 0,
          rotate: 30,
        }
      },
      yAxis: {
        name: yAxisName,
      },
      grid: {
        width: '70%',
      },
      dataset: {
        source: dataset,
      },
      series: series


    }
    map.setOption(option, true)

  })

  return (
    <div>
      <div ref={echartsDOM} className={style.map} />
      <div>
        <Row type="flex" justify="center" gutter={16}>
          <Col>
            <Button onClick={showAddedChart} disabled={isAddedChart}>新增病例</Button>
          </Col>
          <Col>
            <Button onClick={showHealingChart} disabled={isHealingChart}>治愈人数</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
