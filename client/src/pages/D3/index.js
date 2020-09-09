import React from 'react'
import * as d3 from 'd3'

class D3 extends React.Component {
  constructor(props){
      super(props)
      this.myRef = React.createRef()
      this.state = {
        data: [4, 8, 15, 16, 23, 42],
        width: 300,
      }
  }


  componentDidMount() {
      const size = 900
      const svg = d3.select(this.myRef.current)
                  .append('svg')
                  .attr('width', size)
                  .attr('height', size)
      const rectWidth = 100
      svg.selectAll('rect')
         .data(this.state.data)
         .enter()
         .append('rect')
         .attr('x', (d, i) => i * (rectWidth + 5))
         .attr('y', d => size - d)
         .attr('width', rectWidth)
         .attr('height', d => d)
         .attr('fill', 'teal')
  }

  render(){
    return (
      <div ref={this.myRef} />
    )
  }
}
export default D3
