/* Resolves Promise in next tick, no better way ATM 😱 */
export default function flushHttpRequests() {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}
