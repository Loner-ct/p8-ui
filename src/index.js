/* Automatically generated by './build/bin/build-entry.js' */
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// import 'babel-polyfill'
import P8Anchor from '../packages/anchor/index.js';
import P8Bpm from '../packages/bpm/index.js';
import P8Popconfirm from '../packages/popconfirm/index.js';
import P8ProcessApproval from '../packages/processApproval/index.js';
import P8ProcessDefinition from '../packages/processDefinition/index.js';
import P8Button from '../packages/button/index.js';
import P8Card from '../packages/card/index.js';
import P8Contextmenu from '../packages/contextmenu/index.js';
import P8ContextmenuGroup from '../packages/contextmenu-group/index.js';
import P8ContextmenuItem from '../packages/contextmenu-item/index.js';
import P8ContextmenuSubmenu from '../packages/contextmenu-submenu/index.js';
import P8Cron from '../packages/contextmenu/index.js';
import P8Dialog from '../packages/dialog/index.js';
import P8ListLayout from '../packages/listLayout/index.js';
import P8NormalLayout from '../packages/normalLayout/index.js';
import P8MenuLayout from '../packages/menuLayout/index.js';
import P8NlcrLayout from '../packages/nlcrLayout/index.js';
import P8SplitPane from '../packages/splitPane/index.js';
import P8Tree from '../packages/tree/index.js';
import P8TreeSelect from '../packages/treeSelect/index.js';
import P8Table from '../packages/table/index.js';
import P8Drawer from '../packages/drawer/index.js';
import P8Form from '../packages/form/index.js';
import P8Upload from '../packages/upload/index.js';
import P8FileView from '../packages/fileView/index.js';
import P8Search from '../packages/search/index.js';
import P8SelectUser from '../packages/selectUser/index.js';
import P8Import from '../packages/import/index.js';
import P8InfiniteScroll from '../packages/infiniteScroll/index.js';
import P8IconSelector from '../packages/iconSelector/index.js';
import P8StatusIcon from '../packages/statusIcon/index.js';
import P8Tabs from '../packages/tabs/index.js';
import P8EditTable from '../packages/editTable/index.js';
import P8FormParser from '../packages/formApplication/index.js';
import P8FormGenerator from '../packages/formGenerator/index.js';
import P8Wrapper from '../packages/wrapper/index.js';

import ElementUI from 'element-ui';

import inject from './plugins/inject';

const components = [
  P8Anchor,
  P8Bpm,
  P8Popconfirm,
  P8ProcessApproval,
  P8ProcessDefinition,
  P8Button,
  P8Card,
  P8Cron,
  P8Contextmenu,
  P8ContextmenuGroup,
  P8ContextmenuItem,
  P8ContextmenuSubmenu,
  P8Dialog,
  P8ListLayout,
  P8NormalLayout,
  P8MenuLayout,
  P8NlcrLayout,
  P8SplitPane,
  P8Tree,
  P8TreeSelect,
  P8Table,
  P8Drawer,
  P8Form,
  P8Upload,
  P8FileView,
  P8Search,
  P8SelectUser,
  P8Import,
  P8InfiniteScroll,
  P8IconSelector,
  P8StatusIcon,
  P8Tabs,
  P8EditTable,
  P8FormParser,
  P8FormGenerator,
  P8Wrapper
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  
  Vue.config.errorHandler = (error, vm, info) => {console.error(`error:${error.toString()}vm:${vm.toString()}info:${info.toString()}`)}

  Vue.prototype.$loading = ElementUI.Loading.service
  Vue.prototype.$message = ElementUI.Message
  Vue.prototype.$alert = ElementUI.MessageBox.alert
  Vue.prototype.$confirm = ElementUI.MessageBox.confirm
  Vue.prototype.$prompt = ElementUI.MessageBox.prompt
  Vue.prototype.$ELEMENT = { size: (opts.size || 'small'), zIndex: (opts.zIndex || 2000 )}
  Vue.prototype.$bus = new Vue() 
  Vue.prototype.$throw = (error, vm, info) => {console.error(`error:${error.toString()}vm:${vm.toString()}info:${info.toString()}`)}

  Vue.use(ElementUI, opts)
  Vue.use(ElementUI.Loading.directive)
  Vue.use(inject)
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { 
  P8Anchor,
  P8Bpm,
  P8Popconfirm,
  P8ProcessApproval,
  P8ProcessDefinition,
  P8Button,
  P8Card,
  P8Cron,
  P8Contextmenu,
  P8ContextmenuGroup,
  P8ContextmenuItem,
  P8ContextmenuSubmenu,
  P8Dialog,
  P8ListLayout,
  P8NormalLayout,
  P8MenuLayout,
  P8NlcrLayout,
  P8SplitPane,
  P8Tree,
  P8TreeSelect,
  P8Table,
  P8Drawer,
  P8Form,
  P8Upload,
  P8FileView,
  P8Search,
  P8SelectUser,
  P8Import,
  P8InfiniteScroll,
  P8IconSelector,
  P8StatusIcon,
  P8Tabs,
  P8EditTable,
  P8FormParser,
  P8FormGenerator,
  P8Wrapper
}
export default {
  ...{
    version: '1.0.2',
    install,
    P8Anchor,
    P8Bpm,
    P8Popconfirm,
    P8ProcessApproval,
    P8ProcessDefinition,
    P8Button,
    P8Card,
    P8Cron,
    P8Contextmenu,
    P8ContextmenuGroup,
    P8ContextmenuItem,
    P8ContextmenuSubmenu,
    P8Dialog,
    P8ListLayout,
    P8NormalLayout,
    P8MenuLayout,
    P8NlcrLayout,
    P8SplitPane,
    P8Tree,
    P8TreeSelect,
    P8Table,
    P8Drawer,
    P8Form,
    P8Upload,
    P8FileView,
    P8Search,
    P8SelectUser,
    P8Import,
    P8InfiniteScroll,
    P8IconSelector,
    P8StatusIcon,
    P8Tabs,
    P8EditTable,
    P8FormParser,
    P8FormGenerator,
    P8Wrapper
  },
  ...ElementUI
};
