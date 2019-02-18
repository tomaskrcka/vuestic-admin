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
      name: 'firstname',
      sortField: 'firstname'
    },
    {
      title: 'Příjmení',
      name: 'surname'
    },
    {
      title: 'KTM - vrtani',
      name: 'rightsKtm.drilling'
    },
    {
      title: 'KTM - vazeni',
      name: 'rightsKtm.scaling'
    },
    {
      title: 'KTM - tlakovani',
      name: 'rightsKtm.pressing'
    },
    {
      title: 'KTM - servis',
      name: 'rightsKtm.servis'
    },
    {
      title: 'KTM - admin',
      name: 'rightsKtm.admin'
    },
    {
      name: 'active',
      title: 'Aktivní',
      callback: 'gender'
    },
    {
      name: '__component:custom-actions', // <----
      title: 'Actions',
      titleClass: 'center aligned',
      dataClass: 'center aligned'
    }
  ],
  sortFunctions: {
    'userid': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  },
  methods: {
    gender: function (value) {
      return value === 'true' ? 'Male' : 'Female'
    }
  }
}
