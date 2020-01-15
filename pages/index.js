import React, { useEffect } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

const CampaignIndex = props => {
  const renderCampaign = () => {
    const items = props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <div>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <h3>Open Campaigns</h3>
        {renderCampaign()}
        <Button content="Create Campaign" icon="add circle" primary />
      </div>
    </Layout>
  );
};

CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampains().call();
  return { campaigns };
};

export default CampaignIndex;
