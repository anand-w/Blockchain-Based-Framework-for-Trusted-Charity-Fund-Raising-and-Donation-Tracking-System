import React,{Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component{


  onFinalize = async() =>{
    const campaign=Campaign(this.props.address);
    const accounts=await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });
  }

  render(){
    const {Row, Cell}=Table;
    const {id,request, approversCount}=this.props;

    return(
      <Row disabled={request.complete} positive={ !request.complete}>
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
      <Cell>{request.recipient}</Cell>

    

      <Cell>
      { request.complete? null: (
      <Button color="teal" basic onClick={this.onFinalize}>
            Finalize
      </Button>
    )}

      </Cell>



      </Row>
    );
  }
}

export default RequestRow;
