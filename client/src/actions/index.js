
export function loadMessages() {
  return function (dispatch) {
    fetch("http://localhost:3001/messages")
    .then( (response) => {
      return response.json();
    }).then((products) => {
      dispatch(messagesLoaded(products));
    });
  };
}
function messagesLoaded(products) {
  return {
    type: "MESSAGES_LOADED",
    value: products
  };
}
export function createMessage(message) {
  return function (dispatch) {
    fetch("http://localhost:3001/messages", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(message)
    }).then(() => dispatch(loadMessages()));
  };
}

