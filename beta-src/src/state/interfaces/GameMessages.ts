export interface GameMessage {
  fromCountryID: number;
  message: string;
  timeSent: number;
  toCountryID: number;
  turn: number;
}

export interface GameMessages {
  messages: GameMessage[];
}

export function mergeMessageArrays(
  msgs1: GameMessage[],
  msgs2: GameMessage[],
): GameMessage[] {
  const map = new Map();
  const msgs = msgs1.concat(msgs2);
  msgs.forEach((msg) => {
    // can't use array as key, so just mush it all into a string
    const key = `${msg.timeSent}:${msg.fromCountryID}:${msg.toCountryID}:${msg.message}`;
    map.set(key, msg);
  });
  return Array.from(map.values()).sort((m1, m2) => m1.timeSent - m2.timeSent);
}

export default GameMessages;
