import React from 'react'
import IndexApp from '../src/components/component/component'
import data from '../src/data/video-details.json'

class App extends React.Component {
  
  state = { itemvideos: [], selectedVideoItem: null }
  componentDidMount() {
    this.handleGetJson()
  }

  handleGetJson = () => {
    const loadedData = JSON.stringify(data);
    const json = JSON.parse(loadedData);
    this.setState({
      itemvideos: json,
      selectedVideoItem: json[0],
    })
        
  }

  onVideoSelectItem = (videoItem) => {
    this.setState({ selectedVideoItem: videoItem })
  }
  

  render() {
    return (
      <div>
         <IndexApp 
            videoItem={this.state.selectedVideoItem}
            onVideoSelectItem={this.onVideoSelectItem}
            itemvideos={this.state.itemvideos}
          />
      </div>
    )
  }
}

export default App
