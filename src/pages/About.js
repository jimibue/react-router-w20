import { useEffect } from "react";
import { Header } from "semantic-ui-react";

export default () => {
  // act only as component did mount componentwillunmount
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);
  return (
    <div>
      <Header>about</Header>
    </div>
  );
};
