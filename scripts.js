const batteryLevel = document.querySelector('.battery');

navigator.getBattery().then((battery) => {
  const level = battery.level * 100
  console.log(battery);
  batteryLevel.innerHTML = level + '%'

});

