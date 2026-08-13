import makeWASocket, * as baileys from 'baileys'

const compat = { ...baileys, default: makeWASocket, makeWASocket }

export default compat
export * from 'baileys'
