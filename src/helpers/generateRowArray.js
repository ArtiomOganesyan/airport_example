export default function (row, isDeparture) {
  if (row.static) {
    return row.text.map(
      (cell) => <span className="yellow" key={Math.random()}>{cell}</span>,
    );
  }

  const today = new Date().getDay();
  const specificDate = row.flightInfo[isDeparture ? 'departure' : 'arrival'].getDay();
  const day = today === specificDate;

  const flight = new Array(9).fill('');
  const columnTwo = new Array(15).fill('');
  const columnThree = new Array(16).fill('');

  const number = row.flightInfo.number.split('');
  flight.splice(0, number.length, ...number);

  const columnTwoText = row.flightInfo[isDeparture ? 'to' : 'from'].split('');
  columnTwo.splice(0, columnTwoText.length, ...columnTwoText);
  //   "full" | "long" | "medium" | "short"
  const additionalDay = [];
  const columnThreeText = row.flightInfo[isDeparture ? 'departure' : 'arrival']
    .toLocaleTimeString('ru-RU', { timeStyle: 'short' }).split('');
  if (!day) {
    const time = `+${24 * (specificDate - today)} `.split('');
    additionalDay.push(...time.map(
      (cell) => <span className="red" key={Math.random()}>{cell}</span>,
    ));
  }
  additionalDay.push(...columnThreeText.map(
    (cell) => <span className="white" key={Math.random()}>{cell}</span>,
  ));

  columnThree.splice(0, additionalDay.length, ...additionalDay);

  return [...flight.map(
    (cell) => <span className="white" key={Math.random()}>{cell}</span>,
  ), ...columnTwo.map(
    (cell) => <span className="white" key={Math.random()}>{cell}</span>,
  ), ...columnThree.map(
    (cell) => cell || <span className="white" key={Math.random()}>{cell}</span>,
  )];
}
