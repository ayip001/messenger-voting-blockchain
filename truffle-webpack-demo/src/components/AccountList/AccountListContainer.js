import React, { Component } from 'react'
import AccountList from 'components/AccountList/AccountList'
import SendCoin from 'components/SendCoin/SendCoin'

import MetaCoin from 'contracts/MetaCoin.sol';
import Web3 from 'web3';

const Eth = require('ethjs');
const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io'));

if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
  eth.setProvider(window.web3.currentProvider);
} else {
  eth.setProvider(provider); // set to TestRPC if not available
}

class AccountListContainer extends Component {
  constructor(props) {
    super(props)

    this.web3js = new Web3(web3.currentProvider)

    this.state = {
      accounts: [],
      coinbase: ''
    }

    this._getAccountBalance = this._getAccountBalance.bind(this)
  }

  componentWillMount(){
    MetaCoin.setProvider(this.props.web3.currentProvider);    
  }

  _getAccountBalance (account) {
    var balance;
    eth.getBalance(account, function(balanceError, balance){
      balance = Eth.fromWei(balance, 'ether');
    })

    return balance;
  }

  _getAccountBalances () {
    this.props.web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        window.alert('There was an error fetching your accounts.')
        console.error(err)
        return
      }

      if (accs.length === 0) {
        window.alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
        return
      }

      this.setState({coinbase: accs[0]})

      var accountsAndBalances = accs.map((account) => {
        return this._getAccountBalance(account).then((balance) => { return { account, balance } })
      })

      Promise.all(accountsAndBalances).then((accountsAndBalances) => {
        this.setState({accounts: accountsAndBalances, coinbaseAccount: accountsAndBalances[0]})
      })
    }.bind(this))
  }

  componentDidMount() {
    const refreshBalances = () => {
      this._getAccountBalances()
    }

    refreshBalances()

    setInterval(()=>{
      refreshBalances();
      return refreshBalances
    }, 5000)
  }

  render() {
    return (
      <div>
        <AccountList accounts={this.state.accounts} />
        <SendCoin sender={this.state.coinbase} />
      </div>
    )
  }
}

export default AccountListContainer
