<i18n>
{
  "en": {
    "panelTitle": "Run Editor",
    "editActive": "Edit Currently Active Run"
  },
  "ja": {
    "panelTitle": "走者情報の編集",
    "editActive": "現在進行中の走者情報の編集"
  }
}
</i18n>

<template>
  <v-app>
    <v-btn
      :disabled="!activeRun"
      :style="{ 'margin-bottom': '10px' }"
      @click="editActiveRun"
    >
      {{ $t('editActive') }}
    </v-btn>
    <run-list :editor="true" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { store } from '../_misc/replicant-store';
import { nodecg } from '../_misc/nodecg';
import RunList from '../_misc/components/RunList/RunList.vue';
import { RunDataActiveRun } from '../../../types';

export default Vue.extend({
  components: {
    RunList,
  },
  computed: {
    activeRun(): RunDataActiveRun {
      return store.state.runDataActiveRun;
    },
  },
  mounted() {
    if (window.frameElement) {
      window.frameElement.parentElement.setAttribute('display-title', this.$t('panelTitle'));
    }
  },
  methods: {
    editActiveRun(): void {
      if (this.activeRun) {
        const runInfoDialog = nodecg.getDialog('run-modification-dialog') as any; // eslint-disable-line @typescript-eslint/no-explicit-any, max-len
        runInfoDialog.querySelector('iframe').contentWindow.open({
          mode: 'EditActive',
          runData: this.activeRun,
        });
      }
    },
  },
});
</script>
