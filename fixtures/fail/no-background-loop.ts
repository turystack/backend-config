export function start(tick: () => void) {
  setInterval(tick, 60_000)
}
