export const createElement = (parameters) => {
    const { tag, text, attributes, eventListeners, children } = parameters;

    const element = document.createElement(tag);

    if (text) element.innerText = text;

    if (attributes) {
        for (const attribute in attributes) {
            if (attribute === "className") {
                element.setAttribute("class", attributes[attribute]);
            } else {
                element.setAttribute(attribute, attributes[attribute]);
            }
        }
    }

    if (eventListeners) {
        for (const listener in eventListeners) {
            element.addEventListener(listener, eventListeners[listener]);
        }
    }

    if (children) {
        children.forEach(child => element.appendChild(child));
    }

    return element;
};

