
import Vue from 'vue'

Vue.directive(
  'vuetify-ltr',
  (el, binding, vnode) => {
    const instance = vnode.componentInstance
    if (!instance.$vuetify) return
    instance.$vuetify = new Proxy(instance.$vuetify, {
      get(target, prop, receiver) {
        return prop === 'rtl' ? false : target[prop]
      },
    })
  }
)
