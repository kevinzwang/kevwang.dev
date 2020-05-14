import React from 'react'
import anime from "animejs"

class Anime extends React.Component {
  constructor(props) {
    super(props);
    this.targets = [];
  }

  componentDidMount() {
    let animeProps = {
      ...this.props,
      targets: this.targets,
      children: null
    }
    console.log(animeProps)
    anime(animeProps);
  }

  addTarget = (newTarget) => {
    this.targets = [...this.targets, newTarget];
  }

  render() {
    let children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]

    return <> {children.map((child, i) => (React.cloneElement(child, { key: i, ref: this.addTarget })))} </>
  }
}

export default Anime