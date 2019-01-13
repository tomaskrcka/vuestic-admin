<template>
  <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('tables.advanced')">
          <fieldset>
                <div class="form-group">
                  <div class="input-group">
                    <input id="toast-text" v-model="toastText" required/>
                    <label class="control-label" for="toast-text">{{'notificationsPage.toasts.textLabel' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input id="toast-duration" type="number" v-model="toastDuration" required/>
                    <label class="control-label" for="toast-duration">{{'notificationsPage.toasts.durationLabel' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input id="toast-icon" v-model="toastIcon" required/>
                    <label class="control-label" for="toast-icon">{{'notificationsPage.toasts.iconLabel' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
                <div class="form-group toasts-position-group d-flex flex-row">
                  <toast-position-picker v-model="toastPosition" />
                  <vuestic-checkbox
                    :label="'notificationsPage.toasts.fullWidthLabel' | translate"
                    :id="'toast-fullwidth'"
                    v-model="isToastFullWidth"/>
                </div>
                <button slot="trigger" class="btn btn-sm btn-primary" @click="launchToast">
                  {{'notificationsPage.toasts.launchToast' | translate}}
                </button>
              </fieldset>
          <vuestic-data-table
            :apiUrl="apiUrl"
            :tableFields="tableFields"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultTablePerPage"
            :sortFunctions="sortFunctions"
            :apiMode="apiMode"
            :paginationPath="paginationPath"
            :queryParams="queryParams"
          >
            <spring-spinner
              slot="loading"
              :animation-duration="2500"
              :size="70"
              color="#4ae387"
            />
          </vuestic-data-table>
        </vuestic-widget>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BadgeColumn from '../../tables/BadgeColumn'
import FieldsDef from 'vuestic-components/vuestic-datatable/data/fields-definition'
import ItemsPerPageDef from 'vuestic-components/vuestic-datatable/data/items-per-page-definition'
import QueryParams from 'vuestic-components/vuestic-datatable/data/query-params'
import { SpringSpinner } from 'epic-spinners'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'Table',
  components: {
    SpringSpinner
  },
  data () {
    return {
      apiUrl: 'http://localhost:8093/users',
      apiMode: true,
      tableFields: FieldsDef.tableFields,
      itemsPerPage: ItemsPerPageDef.itemsPerPage,
      sortFunctions: FieldsDef.sortFunctions,
      paginationPath: 'pageable',
      defaultTablePerPage: 15,
      queryParams: QueryParams
    }
  }
}
</script>

<style lang="scss">

  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }
</style>
