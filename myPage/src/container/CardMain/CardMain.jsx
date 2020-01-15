import React, { Component } from 'react'
import Card from '../../components/Cards/Card/Card'

const PostData = [{
  "category": "News",
  "title": "CNN Acquire BEME",
  "text": "CNN purchased Casey Neistat's Beme",
  "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
},
{
  "category": "Travel",
  "title": "Nomad Lifestyle",
  "text": "Learn our tips and tricks on living",
  "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
},
{
  "category": "Development",
  "title": "React and the WP-API",
  "text": "The first ever decoupled starter theme",
  "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
},
{
  "category": "News",
  "title": "CNN Acquire BEME",
  "text": "CNN purchased Casey Neistat's Beme",
  "image": "https://source.unsplash.com/user/erondu/600x400"
},
{
  "category": "Travel",
  "title": "Nomad Lifestyle",
  "text": "Learn our tips and tricks on living",
  "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
},
{
  "category": "Development",
  "title": "React and the WP-API",
  "text": "The first ever decoupled starter theme",
  "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
}
]

class CardMain extends Component {
  state = {
    posts: {}
  }

  componentDidMount() {
    this.setState({
      posts: PostData

    })
  }

  render() {
    return (
      <div>
        {
          Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]} />)
        }
      </div>

    )
  }
}
export default CardMain