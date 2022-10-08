<template>
  <div class="boot-page">
    <div class="header-boot-list">
      <h1>Grub Boot Manager</h1>
      <p>Choose an operating system to start, or press TAB to select a tool:</p>
      <p>(Use the arrow keys to highlight your choise, then press ENTER)</p>
    </div>

    <div class="container-boot-list">
      <ul class="os-list">
        <li v-for="(os, i) in operationalSystems" :key="i" :class="{selected: i === osArrayIndex}">
          <span>{{os.label}}</span>
        </li>
      </ul>
    </div>

    <div class="container-boot-tools-list">
      <div class="">
        <p>To specify and advanced option for this choise, press F8:</p>
        <p>Seconds until the highlighted choice will be started automatically: {{time}}</p>
      </div>

      <p class="container-boot-tools-list--label">Tools:</p>
    </div>

    <footer>
      <span>
        ENTER=Select
      </span>
      <span>
        ESC=Cancel
      </span>
    </footer>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BootPage',

  data: () => ({
    operationalSystems: [
      {
        value: 'windows_xp',
        label: 'Windows XP',
      },
      {
        value: 'windows_7',
        label: 'Windows 7',
      },
      {
        value: 'windows_8',
        label: 'Windows 8',
      },
      {
        value: 'ubuntu',
        label: 'Ubuntu 8.04',
      },
    ],

    osArrayIndex: 0,
    timer: 0,
    time: 30,
  }),

  computed: {
    ...mapGetters({
      boot: 'boot/get_boot'
    }),
    arrayOslength() {
      return this.operationalSystems.length;
    }
  },

  mounted() {
    this.setBoot(null);

    this.startTimer();

    window.addEventListener('keydown', this.handleKeyDown);
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
    clearInterval(this.timer);
  },

  methods: {
    ...mapActions({
      setBoot: 'boot/set_boot'
    }),

    setOsByIndex(index) {
      this.setBoot(this.operationalSystems[index].value);
    },

    handleKeyDown(e) {

      if (e.key === 'ArrowUp') {
        if (this.osArrayIndex === 0) {
          this.osArrayIndex = this.arrayOslength - 1;
        } else {
          this.osArrayIndex--;
        }

        this.restartTimer();
      }

      if (e.key === 'ArrowDown') {
        if (this.osArrayIndex === this.arrayOslength - 1) {
          this.osArrayIndex = 0;
        } else {
          this.osArrayIndex++;
        }

        this.restartTimer();
      }

      if (e.key === 'Enter') {
        this.setOsByIndex(this.osArrayIndex);
        this.$router.push({ name: 'index' });
      }

    },

    startTimer() {
      this.timer = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          this.setOsByIndex(this.osArrayIndex);
          this.$router.push({ name: 'index' });
        }
      }, 1000);
    },

    restartTimer() {
      this.time = 30;
      clearInterval(this.timer);
      this.startTimer();
    }
  }
}

</script>