// Turn off global warnings, see: https://v3.vuejs.org/guide/migration/migration-build.html#global-config
require('vue').configureCompat({
  GLOBAL_MOUNT: 'suppress-warning',
  GLOBAL_EXTEND: 'suppress-warning',
  GLOBAL_PROTOTYPE: 'suppress-warning',
  INSTANCE_SCOPED_SLOTS: 'suppress-warning',
  TRANSITION_CLASSES: false,
  TRANSITION_GROUP_ROOT: false,
  // RENDER_FUNCTION: false,
})

// Boot app
require('./app')