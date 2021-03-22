import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Field, SwipeCell, Cell, CellGroup } from "vant";

const app = createApp(App);

app.use(store).use(router).mount("#app");

// vant组件按需加载
app.use(Button);
app.use(Field);
app.use(Cell);
app.use(CellGroup);
app.use(SwipeCell);
