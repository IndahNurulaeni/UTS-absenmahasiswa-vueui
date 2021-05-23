<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Matakuliah</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama Matakuliah</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="matakuliah.nama_matakuliah"
          />
          <div class="alert alert-danger" v-if="validation.nama_matakuliah">
            {{ validation.nama_matakuliah[0] }}
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">SKS</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukkan SKS"
            v-model="matakuliah.sks"
          />
          <div class="alert alert-danger" v-if="validation.sks">
            {{ validation.sks[0] }}
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
    const matakuliah = reactive({
      nama_matakuliah: "",
      sks: "",
    });
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`http://127.0.0.1:8000/api/matakuliahs/${route.params.id}`)
        .then((Response) => {
          console.log(Response.data.data.nama);
          matakuliah.nama_matakuliah = Response.data.data.nama_matakuliah;
          matakuliah.sks = Response.data.data.sks;
         
        })
        .catch((error) => {
          console.log(error.Response.data);
        });
    });
    function update() {
      let nama_matakuliah = matakuliah.nama_matakuliah;
      let sks = matakuliah.sks;
      axios
        .put(`http://127.0.0.1:8000/api/matakuliahs/${route.params.id}`, {
          nama_matakuliah: nama_matakuliah,
          sks: sks,
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
      matakuliah,
      validation,
      router,
      update,
      route,
    };
  },
};
</script>