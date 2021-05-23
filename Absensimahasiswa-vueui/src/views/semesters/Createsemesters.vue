<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Semester</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label"></label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="semester.semesters" />
      <div class="alert alert-danger" v-if="validation.semesters">
        {{ validation.semesters[0] }}
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
    const semester = reactive({
      semesters: '',
    });
    const validation = ref([]);
    const router = useRouter();
    function store(){
      let semesters = semester.semesters;
      
      axios.post("http://127.0.0.1:8000/api/semesters", {
        semesters: semesters,
        
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
      semester,
      validation,
      router, 
      store,
    }
  },
}
</script>