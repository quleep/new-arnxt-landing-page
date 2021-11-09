import React from 'react';
import { Link } from "react-router-dom";

function blog() {
    return (
        <div>
            

    <div className="post">
      {/* <img
        className="postImg"
        src='assets/images/logo7.png'
        alt=""
      /> */}
      <h2>Blogs</h2>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );


        </div>
    )
}

export default blog;
