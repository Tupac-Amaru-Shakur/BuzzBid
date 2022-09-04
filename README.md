VIDEO LINK:- https://drive.google.com/file/d/1P-uElpqGK1I-m92wl-dCK42BfGXjA6PH/view?usp=sharing

PPT LINK:- https://drive.google.com/file/d/1PPvHSMNO4iXC4mYicZBAJWzAh74UwpKH/view?usp=sharing

DEPLOYED LINK:-

BUZZ-BID NFT Digitial Art Auction Marketplace

This DAPP lets anyone add their digital art to IPFS and then put it on auction. Once sold, it is tokenized in ERC721 token $ART making this platform a censorship resistant auction marketplace for art. 
The auction takes place where the seller can start it with a minimum price and add an incremental value. The incremental value is the fixed constant increment that happens to the value. The highest bid is the maximum bid price. The highest bidding bid is the maximum bid amount put in by the user. 
For example:
The seller sets the minimum price of art X at 10Eth and the increment value is 1Eth. If Bidder named Sachin bids 15Eth, The highest Bid is 11Eth and the amount stored internally as the highest bidding amount is 15Eth. If a person called Sanchita bids 12Eth, Sachin's highest bid of 13Eth will automatically be staked. In case no one bids after 11Eth bid of Sachin, then Sachin is the highest bidder and when the owner of the art stops the auction, the Token will be minted for 11Eth and rest of the 4Eth will be returned to Sachin. 

There is no owner of the contract and anyone can his/her art for sale and tokenize it or buy it. If ever frontend application is censored down, the contract is untouched as it is stored on-chain along with IPFS hash.

How to run:
Requirements:
ipfs-http-client@33.1.1
Solidity compuler: 0.6.3

Type
npm run start 
to run the code.

There are two kinds of bids:
1) ``highestBid``: It is the maximum bid price. 
2) ``highestBindingBid``: The highest bidding bid is the maximum bid amount put in by the user.

**For example:**
The seller sets the minimum price of art X at 10Eth and the increment value is 1Eth. If Bidder named Sachin bids 15Eth, The highest Bid is 11Eth(highestBid) and the amount stored internally as the highest bidding amount is 15Eth(highestBindingBid). 
If a person called Sanchita bids 12Eth, Sachin's highest bid of 13Eth will automatically be staked. In case no one bids after 11Eth bid of Sachin, then Sachin is the highest bidder and when the owner of the art stops the auction, the Token will be minted for 11Eth and rest of the 4Eth will be returned to Sachin. 
Scenarios of Bidder over-bidding his own bid, other bidders under-bidding the Highestbid or the highestBindingBid are covered.

``Widthraw()``:
There is a seperate widhraw function that follows the withdrawal design pattern to prevent re-entrenacy attacks. Each user withdraws his or her own funds.  

There is no owner of the contract, and anyone can put his/her art for sale and tokenize it or buy it. If at any point the frontend application is censored down, the contract is untouched as it is stored on-chain along with IPFS hash.

**TESTS**

Run a local enviornment, preferrably on Ganache.
>truffle migrate

>truffle tests
