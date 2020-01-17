import React from "react";
import { Button } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import { Link } from "../../../routes";

const RequestIndex = props => {
  return (
    <Layout>
      <h3>Requests</h3>
      <Link route={`/campaigns/${props.address}/requests/new`}>
        <a>
          <Button primary>Add Requests</Button>
        </a>
      </Link>
    </Layout>
  );
};

RequestIndex.getInitialProps = props => {
  const { address } = props.query;
  return { address: address };
};

export default RequestIndex;
