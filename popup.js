const toggleUImode = () => {
  //toggle UI mode
  //needs acces to DOM
  // document.designMode = "on"; //off
  //chrome extension has an API called chrome avalable

  broadcast({
    type: "toggle-UIMode",
  });
};

// const broadcast = (message) => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.tabs.sendMessage[
//       (tabs[0].id,
//       message,
//       (response) => {
//         if (!response) return;

//         switch (response.type) {
//           case "toggle-UIMode":
//             document.getElementById("toggle-design-mode-btn").innerHTML =
//               response.payload === "on" ? "Disable" : "Enable";
//             break;
//           default:
//           //no operations
//         }
//       })
//     ];
//   });
// };

const broadcast = (message) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      console.log(response);
      if (!response) return;

      switch (response.type) {
        case "toggle-UIMode":
          document.getElementById("toggle-design-mode-btn").innerHTML =
            response.payload === "on" ? "Disable" : "Enable";
          break;

        default:
          break;
      }
    });
  });
};

//capture element
//button in this case
//document.getElementById("toggle-design-mode-btn").onclick = toggleUImode;
document.getElementById("toggle-design-mode-btn").onclick = toggleUImode;
