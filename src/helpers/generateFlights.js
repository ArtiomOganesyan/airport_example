const cities = [
  'Moscow', 'London', 'Astana', 'Almaty', 'Hong Kong', 'Beijing',
  'Tokyo', 'San Francisco', 'Orlando', 'Ekaterinburg', 'Paris', 'Berlin', 'Frankfort',
  'Mexico City', 'Madrid', 'Barcelone', 'Milan', 'Rome',
];

export default (num, from, to) => {
  const result = new Array(num).fill('').map(() => {
    const departure = new Date(new Date().getTime() + Math.floor(Math.random() * 40000000));

    return ({
      company: { logo: 'logo' },
      flightInfo: {
        from: from || cities[Math.floor(Math.random() * cities.length)],
        to: to || cities[Math.floor(Math.random() * cities.length)],
        number: `${Math.random().toString(16).slice(12)}-${Math.floor(Math.random() * 900 + 100)}`,
        departure,
        arrival: new Date(departure.getTime() + Math.floor(Math.random() * 100000000)),
      },
    });
  });

  return result;
};
