import "./Child.css";
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment key="">
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae tempora
        fugiat optio voluptas ea reiciendis, quos ipsam? Ducimus blanditiis
        asperiores animi, molestiae mollitia voluptas recusandae cumque culpa
        quod vero? Iure.
      </p>
    </Fragment>
  );
};

export default Child;
