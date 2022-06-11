export * as signalling from './signaling.ts'
export * as rtcConnection from './rtcConnection.ts'
export { Event } from './events.ts'
export { initPeers, callee, registerPeer } from './peers.ts'

export const serviceURL = 'http:localhost:8000'
export const postURL = '/api/post'
export const sseURL = '/api/sse?id='
