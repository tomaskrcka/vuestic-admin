export default {
  tableFields: [
    {
      name: '__handle',
      titleClass: 'center aligned',
      dataClass: 'center aligned'
    },
    {
      title: 'Už. číslo',
      name: 'userid',
      sortField: 'userid',
      dataClass: 'text-center',
    },
    /*    {
      title: 'Jméno',
      name: 'firstname',
      sortField: 'firstname'
    },
    {
      title: 'Příjmení',
      name: 'surname'
    }, */
    {
      title: '<p class="rotated">KTM - vrtani</p>',
      name: 'rightsKtm.drilling',
      callback: 'trueLabel',
      dataClass: 'text-right'
    },
    {
      title: '<p class="rotated">KTM - vazeni</p>',
      name: 'rightsKtm.scaling',
      callback: 'trueLabel',
      dataClass: 'text-right'
    },
    {
      title: '<p class="rotated">KTM - tlakovani</p>',
      name: 'rightsKtm.pressing',
      callback: 'trueLabel',
      dataClass: 'text-right'
    },
    {
      title: '<p class="rotated">KTM - servis</p>',
      name: 'rightsKtm.servis',
      callback: 'trueLabel',
      dataClass: 'text-right'
    },
    {
      title: '<p class="rotated">KTM - admin</p>',
      name: 'rightsKtm.admin',
      callback: 'trueLabel',
      dataClass: 'text-right'
    },
    {
      title: '<p class="rotated">KTM - tlakovani</p>',
      name: 'rightsJD.bath',
      callback: 'trueLabel',
      dataClass: 'text-right'
    },
    {
      title: '<p class="rotated">Aktivni</p>',
      name: 'active',
      callback: 'trueLabel',
      dataClass: 'text-right'
    },
    {
      name: '__component:custom-actions', // <----
      title: '<p class="rotated">Actions</p>',
      dataClass: 'text-right'
    }
  ],
  sortFunctions: {
    'userid': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
