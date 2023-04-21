HOMEWORK - 7

<button id="root" value="button"></button>

<script type="text/babel">
'use strict';
const e = React.createElement;
class Counter extends React.Component {
constructor(props) {
super(props);
this.state = { counter: 0 };
this.handleClick = this.handleClick.bind(this);
}
handleClick() {
this.setState((pS) => ({ counter: pS.counter + 1 }));
}
render() {
return e('button', { onClick: this.handleClick }, `Clicked ${this.state.counter} times`);
}
}
ReactDOM.render(e(Counter), document.getElementById('root'));
