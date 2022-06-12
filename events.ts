// deno-lint-ignore-file no-explicit-any

/** generic event Handler type */
type Handler<T = any> = (data: T) => void;
//type Handler<T> = (value?: T) => void;

/** event handlers map */
const eventHandlers: Map<string, Handler[]> = new Map()
//todo handlersByName: { [event in keyof T]?: Set<Handler<T[event]>> }


/** registers a handler function to be executed when an event is fired */
export const on = <K extends keyof Event>(event: K, handler: Handler): void => {
    if (eventHandlers.has(event)) {
        const handlers = eventHandlers.get(event)!
        handlers.push(handler)
    } else { // not found - create it
        eventHandlers.set(event, [handler])
    }
}

/** execute all registered handlers for event name */
export const fire = <K extends keyof Event>(event: K, data?: Event[K]) => {
    const handlers = eventHandlers!.get(event)
    if (handlers) {
        for (const handler of handlers) {
            handler((data != undefined) ? data : {})
        }
    }
}

/** Event types */
export type Event = {
    DieTouched: {index: number},
    HidePopup: {},
    PopupResetGame: {show: boolean, title: string, msg: string},
    ResetGame: string,
    ResetTurn: string,
    RemovePeer: string,
    RegisterPeer: {id: string, name: string},
    RollButtonTouched: {},
    PeerDisconnected: {},
    ScoreButtonTouched: number,
    ScoreElementResetTurn: string,
    SetID: {id: string, name: string},
    ShowPopup: {title: string, msg: string},
    UpdateDie: {index: number, value?: number, frozen?: boolean},
    UpdateInfo: string,
    UpdateLeftscore: {color: string, text: string},
    UpdatePeers: any[],
    UpdatePlayer: {index: number, color: string, text: string},
    UpdateRoll: string,
    UpdateRollButton: {text: string, color: string, disabled: boolean},
    UpdateScore: number,
    UpdateScoreElement: {index: number, renderAll: boolean, fillColor: string, value: string, available: boolean},
    UpdateTooltip: {index: number, hovered: boolean},
    UpdateUI: string,
    ViewWasAdded: {type: string, index: number, name: string},
}