
/* 
  The mod.ts file is usually the entry point of your module. 
  Here we expose everything required of our public API. 
  You will want to keep this mod.ts file clean by only using import 
  and export-statements, rather than defining actual functionality.
 */

/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

export * as rtcConnection from './rtcConnection.ts'
export { Event } from './events.ts'
export { callee, caller, setCaller, initPeers, registerPeer } from './peers.ts'
export type { Peer } from './peers.ts'
