// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogDetails} = this.props
    const {id, title, description, publishedDate} = blogDetails
    return (
      <li className="width">
        <div className="item-con">
          <div>
            <h1 className="head">{title}</h1>
            <p className="desc">{description}</p>
          </div>
          <div className="end">
            <p className="desc">{publishedDate}</p>
          </div>
        </div>
        <>
          <hr />
        </>
      </li>
    )
  }
}
export default BlogItem
