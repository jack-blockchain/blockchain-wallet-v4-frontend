import {fromJS} from 'immutable'

var Long = require('long')

export let State = () => fromJS({
  channels: {},
  connections: [],

  connected: false
})

export let Connection = () => ({
  connected: true,
  initSent: true,
  initReceived: false,

  gfRemote: [],
  lfRemote: [],

  channels: [],

  lastPing: 0,

  error: null
})

export let ChannelParams = (fundingKey, dustLimitSatoshis, maxHtlcValueInFlightMsat, channelReserveSatoshis, htlcMinimumMsat, toSelfDelay, maxAcceptedHtlcs, revocationBasepoint, paymentBasepoint, delayedPaymentBasepoint, globalFeatures, localFeatures) =>
                    fromJS({fundingKey, dustLimitSatoshis, maxHtlcValueInFlightMsat, channelReserveSatoshis, htlcMinimumMsat, toSelfDelay, maxAcceptedHtlcs, revocationBasepoint, paymentBasepoint, delayedPaymentBasepoint, globalFeatures, localFeatures})

export let ChannelUpdateTypes = {
  ADD: 1,
  FULFILL: 2,
  FAIL: 3,
  FAIL_MALFORMED: 4
}
export let Direction = {
  OFFERED: 1,
  RECEIVED: 2
}
export let Funded = {
  LOCAL_FUNDED: 1,
  REMOTE_FUNDED: 2
}
export let ChannelUpdateWrapper = (type, direction, index, msg) => fromJS({type, direction, index, msg})

export let ChannelState = () => fromJS({
  amountMsatLocal: null,
  amountMsatRemote: null,

  indexes: {
    in: new Long(0),
    inU: new Long(0)
  },

  committed: [],
  ack: [],
  unack: [],

  // This is the index of the update this state was on before a commit message
  // Upon an ack message, we move all unack messages into the other ack state, which are <= this index
  updateCounter: new Long(0),
  commitIndex: new Long(0),

  commitmentNumber: Math.pow(2, 48) - 1
})

export let Channel = () => fromJS({
  channelId: null,
  staticRemote: null,

  paramsLocal: null,
  paramsRemote: null,

  remote: ChannelState(),
  local: ChannelState(),

  commitmentObscureHash: null,
  commitmentStorage: [],

  messageOut: []
})

export let PaymentWrapper = (direction, id, payment) =>
                     fromJS({direction, id, payment})

export let Payment = (amount, paymentHash, onionRoutingPackage, cltvTimeout) =>
              fromJS({amount, paymentHash, onionRoutingPackage, cltvTimeout})