<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Matakuliah</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama_matakuliah</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="matakuliah.nama_matakuliah" />
      <div class="alert alert-danger" v-if="validation.nama_matakuliah">
        {{ validation.nama_matakuliah[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">SKS</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan sks"
    v-model="matakuliah.sks" />
    <div class="alert alert-danger" v-if="validation.sks">
        {{ validation.sks[0] }}
      </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
  setup() {
    const matakuliah = reactive({
      nama_matakuliah: '',
      sks: '',
    });
    const validation = ref([]);
    const router = useRouter();
    function store(){
      let nama_matakuliah = matakuliah.nama_matakuliah;
      let sks = matakuliah.sks;
      
      axios.post("http://127.0.0.1:8000/api/matakuliahs", {
        nama_matakuliah: nama_matakuliah,
        sks: sks,
      })
      .then(() => {
        router.push({
          name:'Home',
        });
      })
      .catch(error => {
        console.log(error)
      })
    }
    return {
      matakuliah,
      validation,
      router, 
      store,
    }
  },
}
</script>