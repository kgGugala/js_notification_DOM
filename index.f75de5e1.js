"use strict";
const pushNotification = (posTop, posRight, title, description, type)=>{
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.style.right = `${posRight}px`;
    notification.style.top = `${posTop}px`;
    document.body.appendChild(notification);
    const notificationTitle = document.createElement("h2");
    notificationTitle.textContent = title;
    notificationTitle.className = "title";
    notification.appendChild(notificationTitle);
    const notificationDescription = document.createElement("p");
    notificationDescription.textContent = `${description}`;
    notification.appendChild(notificationDescription);
    setTimeout(()=>{
        notification.remove();
    }, 2000);
};
pushNotification(10, 10, "Title of Success message", "Message example.\n Notification should contain title and description.", "success");
pushNotification(150, 10, "Title of Error message", "Message example.\n Notification should contain title and description.", "error");
pushNotification(290, 10, "Title of Warning message", "Message example.\n Notification should contain title and description.", "warning");

//# sourceMappingURL=index.f75de5e1.js.map