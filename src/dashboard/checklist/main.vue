<i18n>
{
  "en": {
    "panelTitle": "Checklist"
  },
  "ja": {
    "panelTitle": "チェックリスト"
  }
}
</i18n>

<template>
  <v-app>
    <div>
      <v-switch
        v-for="checkbox in checklist"
        :key="checkbox.name"
        :label="checkbox.name"
        :value="true"
        :input-value="checkbox.complete"
        @change="toggleCheckbox(checkbox.name, $event !== null)"
      />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { store } from '../_misc/replicant-store';
import { CheckList } from '../../../types';

export default Vue.extend({
  components: {},
  data() {
    return {};
  },
  computed: {
    checklist(): CheckList {
      return store.state.checklist;
    },
  },
  mounted() {
    if (window.frameElement) {
      window.frameElement.parentElement.setAttribute('display-title', this.$t('panelTitle'));
    }
  },
  methods: {
    toggleCheckbox(name: string, checked: boolean): void {
      nodecg.sendMessage('toggleCheckbox', { name, checked }).then(() => {
        // checklist change successful
        store.commit('updateChecklistToggle', { name, checked });
      }).catch(() => {
        // checklist change unsuccessful
      });
    },
  },
});
</script>

<style scoped>
</style>
