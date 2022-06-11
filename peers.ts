
import { postURL } from './signaling.ts'
import { Event } from '../events.ts'

export let callee: Peer = {
    id: 'callee',
    name: 'callee',
    alias: 'Player-1',
    role: 'callee'
}

export let caller: Peer = {
    id: 'caller',
    name: 'caller',
    alias: 'Player-2',
    role: 'caller'
}

/** set the caller peer */
export function setCaller(peer: Peer) {
    caller = peer
    console.info('setCaller: ', caller)
}

/** initialize both peers */
export function initPeers(id: string, name: string) {
    callee = { id: id, name: name, alias: 'Player-1', role: 'callee' }
    caller = { id: 'caller', name: 'caller', alias: 'Player-2', role: 'caller'}
}

/** Notify any listening peer ... we're registering as a new peer */
export const registerPeer = (id: string, _name: string) => {
    const msg = JSON.stringify({
        from: id,
        event: Event.RegisterPeer,
        data: callee
    })
    fetch(postURL, { method: "POST", body: msg })
}

// We start-up assuming we're first; the callee.   
// If we happen to connect after another peer, our role 
// will become caller and we'll need to adjust our role.
export function swapPeers(newName: string) {
    caller.name = newName
}

export type Peer = {
    id: string,
    name: string,
    alias: string,
    role: PeerRole
}

type PeerRole = 'callee' | 'caller'
