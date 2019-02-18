// DetailRow.vue
  <template>
    <div @click="onClick">
      <div class="inline field">
        <label>Name: </label>
        <span>{{rowData.firstname}}</span>
      </div>
      <div class="inline field">
        <label>Email: </label>
        <span>{{rowData.surname}}</span>
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  methods: {
    onClick (event) {
      console.log('my-detail-row: on-click', event.target)
    }
  },
}
</script>
