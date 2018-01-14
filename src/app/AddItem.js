const React = require('react')

require('./css/addItem.css')

class AddItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" required ref="newItem"/>
        <input type="submit" value="clickzie!"/>
      </form>
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onAdd(this.refs.newItem.value)
  }
}


module.exports = AddItem
