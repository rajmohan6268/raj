import raj from "./raj.vue";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("raj", raj);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

raj.install = install;

export default raj;