import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedItems: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedItems = posts;
            },
            addItem(state, item) {
                state.loadedItems.push(item);
            },
            editPost(state, item) {
                const postIndex = state.loadedItems.findIndex(
                    post => post.id === item.id
                );
                state.loadedItems[postIndex] = item;
            },
            deletePost(state, id){

                var list = state.loadedItems.filter(x => {
                    return x.id != id;
                  })
                state.loadedItems = list
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                    .$get("https://nuxt-blog-c7247.firebaseio.com/item.json")
                    .then(data => {
                        const postsArray = [];
                        for (const key in data) {
                            postsArray.push({ ...data[key], id: key, });
                        }
                        vuexContext.commit("setPosts", postsArray);
                    })
                    .catch(e => context.error(e));
            },
            ADD_ITEM(vuexContext, item) {
                console.log(item)
                return axios.post('https://nuxt-blog-c7247.firebaseio.com/item.json', { ...item, updatedDate: new Date() })
                    .then(data => {
                        vuexContext.commit('addItem', { ...item, id: data.name })

                    })
                    .catch(e => console.log(e));
            },
            EDIT_ITEM(vuexContext, item) {
                return axios.put(
                    "https://nuxt-blog-c7247.firebaseio.com/item/" +
                    item.id +
                    ".json",
                    item
                )
                    .then(res => {
                        vuexContext.commit("editPost", item);
                    })
                    .catch(e => console.log(e));
            },
            DELETE_ITEM(vuexContext, id) {
                return axios.delete(
                    "https://nuxt-blog-c7247.firebaseio.com/item/" +
                    id +
                    ".json"
                ).then(res =>{
                    vuexContext.commit('deletePost', id)
                })
                .catch(e => console.log(e))
            }

        },
        getters: {
            loadedItems(state) {
                return state.loadedItems
            }

        }

    })
}

export default createStore;