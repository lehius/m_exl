export class Emitter {
  constructor() {
    this.listeners = {}
  }
  //dispatch, fire, trigger
  emit(eventName, ...args) {
    if (!Array.isArray(this.listeners[eventName])) {
      return false
    }
    this.listeners[eventName].forEach(listener => {
      listener(...args)
    })
    return true
  }
  //on, listen
  subscribe(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || []
    this.listeners[eventName].push(fn)
    return () => {
      this.listeners[eventName].filter(listener => listener !== fn)
    }
  }
} 