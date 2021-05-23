<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Semester</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Semester</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="semester.semesters"
          />
          <div class="alert alert-danger" v-if="validation.semesters">
            {{ validation.semesters[0] }}
          </div>
        </div>


        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const semester = reactive({
      semesters: "",
    });
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`http://127.0.0.1:8000/api/semesters/${route.params.id}`)
        .then((Response) => {
          console.log(Response.data.data.nama);
          semester.semesters = Response.data.data.semesters;
         
        })
        .catch((error) => {
          console.log(error.Response.data);
        });
    });
    function update() {
      let semesters = semester.semesters;
      axios
        .put(`http://127.0.0.1:8000/api/semesters/${route.params.id}`, {
          semesters: semesters,
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      semester,
      validation,
      router,
      update,
      route,
    };
  },
};
</script>