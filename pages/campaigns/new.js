import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();
    await window.ethereum.enable();

    setLoading(true);
    setErrorMessage("");

    // validate input of the user
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      await factory.methods.createCampaign(minimumContribution).send({
        from: accounts[0]
      });
    } catch (err) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <h3>Create a campaign</h3>
      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={event => setMinimumContribution(event.target.value)}
          />
        </Form.Field>
        <Message error header="Oops" content={errorMessage} />
        <Button loading={loading} primary>
          Create!
        </Button>
      </Form>
    </Layout>
  );
};

export default CampaignNew;
