export const notification = body => {
  try {
    if (!Notification) {
      console.warn("Browser does not support notifications");
      return false;
    }

    if (Notification.permission !== "granted") {
      console.log("Tried to send notification when they are not enabled");
      return false;
    }

    const options = {
      icon: "/img/icon.png",
      vibrate: true,
      body
    };

    const n = new Notification("Pomodo", options);

    setTimeout(n.close.bind(n), 5000);
  } catch (e) {
    console.error("Error: Creating notification");
    console.error(e);
  }
};
