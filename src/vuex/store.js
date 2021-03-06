import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // TODO: 放置初始状态
  // 应用启动时，count 置为0
  count: 0,
  sumnub: 0
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  INCREMENT(state, amount) {
    state.count = state.count + amount
    state.sumnub = state.sumnub + amount
  },
  REDUCE(state, amount) {
    state.count = state.count - amount
    state.sumnub = state.sumnub + amount
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
})
