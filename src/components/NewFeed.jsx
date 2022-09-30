import React from 'react'
import { useEffect, useState } from 'react';
// import { loadAllCategories } from '../services/Category-service';
import { loadAllPosts } from '../services/Post-service';
import { Row, Col, } from "reactstrap"


const NewFeed = () => {
  const [postContent, SetPostContent] = useState(null)


  useEffect(() => {
    // load all the posts from server
    loadAllPosts().then((data) => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })

  }, []);

  return (
    <div>
      <div className="container-fluid">
        <Row>
          <Col md={
            {
              size: 10,
              offset: 1
            }
          }>
            <h1>Blogs Count({postContent?.totalElements})</h1>

          </Col>
        </Row>
      </div>
    </div>
  )
}

export default NewFeed
