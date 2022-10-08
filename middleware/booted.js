export default function ({ store, redirect }) {
  if (!store.getters['boot/get_boot']) {
    redirect({ name: 'boot' });
  }
}