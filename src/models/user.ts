// 状态管理
export const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

export default {
    // 定义model的初始state
    state: {
        name: '',
        id: ''
    },
    // 定义改变模型状态的纯函数
    reducers: {
        update(prevState, payload) {
            return {
                ...prevState,
                ...payload
            }
        }
    },
    // 定义处理该模型副作用的函数
    effects: (dispatch) => ({
        async  getUserInfo() {
            await delay(1000);
            dispatch.user.update({
                name: 'taobao',
                id: '123'
            })
        }
    })
}