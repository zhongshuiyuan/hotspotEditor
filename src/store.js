import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    krpano:null,
    hotspot:null,
    settype:'',
    modal:false,
    multimodal:false,
    style:null,
    filepath:"",
    attributes:null,
    spotevent:null,
    status:{
      isslidebar:false,
      refresh:0,
      location:false,
      addhotspot:false,
      eventbus:false,
      spoteventmodal:false,
      spotattributemodal:false
    }

  },
  mutations: {
    changepath(state,path){
      state.filepath = path;
    },
    setKrpano(state,krpano){
      state.krpano = krpano
    },
    sethotspot(state,hotspot){
      state.hotspot = hotspot;
    },
    togglerefresh(state,date){
      state.status.refresh = date;
    },
    setattributes(state,attributes){
      state.attributes = attributes;
    },
    setspotevent(state,spotevent){
      state.spotevent = spotevent
    }
  },
  actions: {

  }
})
