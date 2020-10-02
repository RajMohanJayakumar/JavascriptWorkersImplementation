
  let input1 = document.getElementById('input-1');
  let input2 = document.getElementById('input-2');
  let showNotificationBtn = document.getElementById('show-notification');

  showNotificationBtn.onclick = () => {
    if(Notification.permission === "default"){
        Notification.requestPermission().then(() => {
            new Notification(input1.value, { body: input2.value })
        })
    }

    if(Notification.permission === "granted"){
      new Notification(input1.value, { body: input2.value })
    }
}
