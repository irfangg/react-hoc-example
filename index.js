import React, { Component } from 'react';
import { render } from 'react-dom';
import ShowMore from './ShowMore';
import CarsList from './CarsList';

// 1. HoC Toggle Wrapper Component Factory
const withToggle = (WrappedComponent) => {
  class Toggle extends Component {
    constructor(props) {
      super(props);
      this.state = { isActive: false };
      this.onToggle = this.onToggle.bind(this);
    }

    render() {
      return (
        <WrappedComponent
          isActive={this.state.isActive}
          onToggle={this.onToggle}
        />
      );
    }

    onToggle() {
      this.setState({
        isActive: !this.state.isActive,
      });
    }
  }

  Toggle.displayName =
    (WrappedComponent.displayName || WrappedComponent.name) + 'WithToggle';

  return Toggle;
};

// 2. Content helper Component
const Title = ({ onClick }) => <h2 onClick={onClick}>Click me</h2>;

// 3. Content helper Component
const Content = () => (
  <div>
    <ShowMore itemsLength={items.length} itemsLimit={4}>
      {(itemsToShow) => <CarsList cars={items} itemsToShow={itemsToShow} />}
    </ShowMore>
    <ShowMore itemsLength={items.length} itemsLimit={3}>
      {(itemsToShow) => <CarsList cars={items2} itemsToShow={itemsToShow} />}
    </ShowMore>
  </div>
);
const items = [
  { name: 'Audi', country: 'Germany' },
  { name: 'BMW', country: 'Germany' },
  { name: 'Chevrolet', country: 'USA' },
  { name: 'Citroen', country: 'France' },
  { name: 'Hyundai', country: 'South Korea' },
  { name: 'Mercedes-Benz', country: 'Germany' },
  { name: 'Renault', country: 'France' },
  { name: 'Seat', country: 'Spain' },
];
const items2 = [
  { name: 'Audi1', country: 'Germany' },
  { name: 'BMW1', country: 'Germany' },
  { name: 'Chev1rolet', country: 'USA' },
  { name: 'Citro1en', country: 'France' },
  { name: 'Hyundaewqi', country: 'South Korea' },
  { name: 'Mercedes-ewrBenz', country: 'Germany' },
  { name: 'Renaultewr', country: 'France' },
  { name: 'Seatsdf', country: 'Spain' },
];
// 4. The Component We Are going To Wrap
const ToggleContent = ({ isActive, onToggle }) => (
  <div>
    <Title onClick={onToggle} />
    <p>Foo Desc</p>
    {isActive && <Content />}
  </div>
);

// 5. Wrapped Comopnent (the one we would like to use)
const ToggleComponent = withToggle(ToggleContent);

// It could be also written like this so we can merge thr 4th and 5th components in one

// const ToggleComponent = withToggle(({ isActive, onToggle }) => (
//   <div>
//     <Title onClick={onToggle} />
//     <p>Foo Desc</p>
//     {isActive && <Content />}
//   </div>
// ));

render(<ToggleComponent />, document.getElementById('root'));
