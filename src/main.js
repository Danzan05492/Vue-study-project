import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD

createApp(App).mount('#app')
=======
import components from './components/UI';
const app = createApp(App)

components.forEach(component =>{
    app.component(component.name, component)
})
app.mount('#app')
>>>>>>> 38431b2 (add components and library for global export of components)
