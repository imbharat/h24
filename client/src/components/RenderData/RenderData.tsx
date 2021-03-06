import React from 'react';
import { getProducts } from '../../shared/api_requests';
import { Category } from '../../shared/types';

interface Props {
  render: (categories: Category[]) => {}
}

type State = {
  categories: Category[];
};

class RenderData extends React.PureComponent<Props> {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    getProducts().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    return <div>
      {this.props.render(this.state.categories)}
    </div>;
  }
}

export default RenderData;
