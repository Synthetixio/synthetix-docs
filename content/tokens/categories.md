# Categories

Here are the different kinds of Synths available in the Synthetix system. 

## Fiat Synths

Fiat Synths track the price of fiat currencies via price feeds supplied by Chainlink's oracle network of distributed node operators.  

## Crypto Synths

Crypto Synths track the price of cryptocurrencies via price feeds currently supplied by a Synthetix oracle. Crypto Synths will soon be transitioned to use Chainlink's oracle network. 

## Index Synths

Index Synths track the price of indices via price feeds supplied by Chainlink's oracle network of distributed node operators. 
These indices can either be available in off-chain finance, such as sNIKKEI, or they can be custom designed by the Synthetix community, such as sDEFI. 

## Inverse Synths (iSynths)

iSynths inversely track the price of assets via price feeds supplied by either Synthetix's oracle or Chainlink's oracle network of distributed node operators. 
They allow traders to effectively take a short position, and are currently available for Crypto Synths and Index Synths. 

Each iSynth has three important points: an entry point, an upper limit, and a lower limit. Its entry point is the price at which it is entered into the system. 

### An example of how iSynths work

Let's say iBTC was added into the system when sBTC was at $5000. That would mean iBTC's entry point would be $5000, and its value would inversely track that of sBTC, so if the price of sBTC drops to $4900 then iBTC would be at $5100, and vice versa. 

Let's also say that iBTC's upper limit is $7500 and lower limit is $2500 (these are programmed when it's added to the system). These represents the points at which this iSynth gets frozen. If sBTC reaches $2500, then iBTC reaches its upper limit of $7500 and is frozen at that value. Any further fluctuations in the value of sBTC will not be reflected in the value of iBTC. The Synthetix core contributors will then endeavour to redeploy the frozen iSynth as soon as possible. This involves 'purging' everyone who holds the frozen iSynth into sUSD, after which a new iBTC is then deployed with a new entry point and new limits. 

### iSynth leverage

The primary reason iSynths need upper and lower limits is because the further an iSynth gets from its entry point, the more effective leverage there is for each movement due to [design](https://docs.synthetix.io/contracts/exchangerates/#rateorinverted). 

### An example of how iSynth leverage works

As BTC moves away from the entry point iBTC starts to behave more like a leveraged token. If iBTC was at $3750, halfway to its lower limit of $2500, then each $1 of iBTC purchased generates $1.50 of price movement when BTC moves $1. With iBTC at $2500, it would generate $2 of price movement (if it wasn't frozen).  

To use a different and more extreme example without limits, if iBTC's entry point was at $5000, and sBTC got up to $9999, leaving iBTC at $1, then you get around 10,000x leverage at that point, because for every 1:10,000 movement in sBTC you get a 1:1 movement in iBTC. 
