<template>
  <div class="todo-list">
    <!-- 添加待办 -->
    <van-cell-group>
      <van-field
        v-model="todo"
        center
        clearable
        placeholder="新增待办"
        @keyup.enter="AddTodo"
      >
        <template #button>
          <van-button size="small" type="primary" @click="AddTodo"
            >新增</van-button
          >
        </template>
      </van-field>
    </van-cell-group>
    <!-- 待办列表 -->
    <div>
      <h3>待办列表({{ todos.length }})</h3>
      <van-swipe-cell v-for="item in todos" :key="item.id">
        <van-cell :border="false" :title="item.text" />
        <template #right>
          <van-button
            square
            type="primary"
            text="已完成"
            @click="ChangeStatus(item, true)"
          />
          <van-button
            square
            type="danger"
            text="删除"
            @click="RemoveTodo(item.id)"
          />
        </template>
      </van-swipe-cell>
    </div>
    <!-- 已办列表 -->
    <div>
      <h3>已办列表({{ dones.length }})</h3>
      <van-swipe-cell v-for="item in dones" :key="item.id">
        <van-cell :border="false" :title="item.text" />
        <template #right>
          <van-button
            square
            type="primary"
            text="未完成"
            @click="ChangeStatus(item, false)"
          />
          <van-button
            square
            type="danger"
            text="删除"
            @click="RemoveTodo(item.id)"
          />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, ref } from "vue";

interface TodoItem {
  id: number;
  done: boolean;
  text?: string;
}

export default defineComponent({
  setup() {
    let todo = ref("");
    const state = reactive({
      todoList: [
        {
          id: 1,
          done: false,
          text: "吃饭",
        },
        {
          id: 2,
          done: false,
          text: "睡觉",
        },
        {
          id: 3,
          done: false,
          text: "打豆豆",
        },
      ],
    });
    // 使用计算属性生成待办列表
    const todos = computed(() => {
      return state.todoList.filter((item) => !item.done);
    });

    // 使用计算属性生成已办列表
    const dones = computed(() => {
      return state.todoList.filter((item) => item.done);
    });

    // 修改待办状态
    const ChangeStatus = (item: TodoItem, status: boolean) => {
      item.done = status;
    };

    // 新增待办
    const AddTodo = () => {
      if (!todo.value) {
        alert("请输入待办事项");
        return;
      }
      state.todoList.push({
        text: todo.value,
        id: Date.now(),
        done: false,
      });
      todo.value = "";
    };

    // 删除待办
    const RemoveTodo = (id: number) => {
      state.todoList.splice(
        state.todoList.findIndex((item) => {
          item.id === id;
        }),
        1
      );
    };

    return {
      todo,
      state,
      todos,
      dones,
      ChangeStatus,
      AddTodo,
      RemoveTodo,
    };
  },
});
</script>

<style lang="less" scoped>
.todo-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  padding: 20px 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
}
</style>
