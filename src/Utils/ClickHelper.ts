const triggerEvent = (node: HTMLElement, eventType: string) => {
  const event = new Event(eventType, { bubbles: true, cancelable: true });
  node.dispatchEvent(event);
}

const click = (target: HTMLElement) => {
  triggerEvent(target, 'mouseover')
  triggerEvent(target, "mousedown");
  triggerEvent(target, "click");
  triggerEvent(target, "mouseup");
}

export { triggerEvent, click }