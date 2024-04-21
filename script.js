const cities = [
    { name: "New York", timezone: "America/New_York" },
    { name: "London", timezone: "Europe/London" },
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "Sydney", timezone: "Australia/Sydney" }
  ];
  
  function updateClock() {
    cities.forEach(city => {
      const time = dayjs().tz(city.timezone).format('HH:mm:ss');
      document.getElementById(city.name).textContent = `${city.name}: ${time}`;
    });
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  