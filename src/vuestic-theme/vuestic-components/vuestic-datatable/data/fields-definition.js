export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center',
      width: '4%'
    },
    {
      title: 'Už. číslo',
      name: 'userid',
      sortField: 'userid'
    },
    {
      title: 'Jméno',
      name: 'firstname'
    },
    {
      title: 'Příjmení',
      name: 'surname'
    },
    {
      name: 'active',
      title: 'Aktivní',
      callback: 'trueLabel'
    }
  ],
  sortFunctions: {
    'userid': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
