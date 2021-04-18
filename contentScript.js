const toggleUImode = () => {
  document.designMode = document.designMode === "off" ? "on" : "off";

  return {
    type: "toggle-UIMode",
    payload: document.designMode,
  };
};
const actions = {
  "toggle-UIMode": toggleUImode,
};

chrome.runtime.onMessage.addListener((request, sender, response) => {
  const reply = actions[request.type] && actions[request.type](request.payload);
  reply && response(reply);
});
