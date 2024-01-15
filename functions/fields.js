// add field names in same order as spreadsheet columns
// mapOrderToSpreadsheetLines is likely ok as is, but update if needed

const fieldOrder = [
  'key',
  'first',
  'last',
  'email',
  'phone',
  'admissionQuantity',
  'admissionCost',
  'donation',
  'total',
  'deposit',
  'owed',
  'purchaser',
  'createdAt',
  'electronicPaymentId'
];

export const mapOrderToSpreadsheetLines = (order) => {
  const orders = []
  const createdAt = new Date(order.createdAt).toLocaleDateString();
  const purchaser = `${order.people[0].first} ${order.people[0].last}`;
  const owed = order.total - order.deposit;
  const updatedOrder = joinOrderArrays(order);
  const { people, ...orderFields } = updatedOrder
  for (const person of people) {
    if (person.first !== '') { // skip person with no data
      const address = person.apartment ? `${person.address} ${person.apartment}` : person.address;
      let personFields = { ...person, address, purchaser, createdAt };
      if (person.index === 0) {
        personFields = { ...personFields, ...orderFields, owed, createdAt };
      }
      const line = fieldOrder.map(field => personFields[field] || '');
      orders.push(line);
    }
  }
  return orders;
};

const joinOrderArrays = (order) => {
  // technically this also modifies original order object, but that's ok in this case
  for (let key in order) {
    if (key !== 'people' && Array.isArray(order[key])) {
      order[key] = order[key].join(', ');
    }
  }
  return order;
};
