import React from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";

const CampaignShow = props => {
  const renderCards = () => {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = props;
    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver."
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Request must be approved from approvers."
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign."
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "Balance is how much money this campaign has left to spend."
      }
    ];

    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <h3>Campaign Show</h3>
      <Grid>
        <Grid.Column width={10}>{renderCards()}</Grid.Column>
        <Grid.Column width={6}>
          <ContributeForm address={props.address} />
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

CampaignShow.getInitialProps = async props => {
  const campaign = Campaign(props.query.address);
  const summary = await campaign.methods.getSummary().call();
  return {
    address: props.query.address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4]
  };
};

export default CampaignShow;
