<template>
  <div>

    <p>Template: {{boot}}</p>

    <ubuntu-template v-if="checkOs('ubuntu')" />
    <windows-xp-template v-if="checkOs('windows_xp')" />
    <windows-7-template v-if="checkOs('windows_7')" />
    <windows-8-template v-if="checkOs('windows_8')" />

    <nuxt-link :to="{name: 'boot'}">Boot Page</nuxt-link>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'IndexPage',

  middleware: ['booted'],

  computed: {
    ...mapGetters({
      boot: 'boot/get_boot'
    })
  },

  methods: {
    ...mapActions({
      setBoot: 'boot/set_boot'
    }),

    checkOs(os) {
      return os === this.boot;
    }
  }

};
</script>
