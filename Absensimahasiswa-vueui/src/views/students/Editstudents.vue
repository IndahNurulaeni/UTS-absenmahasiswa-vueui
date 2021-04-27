<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Students</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama Mahasiswa</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="student.nama_mahasiswa"
          />
          <div class="alert alert-danger" v-if="validation.nama_mahasiswa">
            {{ validation.nama_mahasiswa[0] }}
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Alamat</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukkan Alamat"
            v-model="student.alamat"
          />
          <div class="alert alert-danger" v-if="validation.alamat">
            {{ validation.alamat[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">No Tlp</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="student.no_tlp"
          />
          <div class="alert alert-danger" v-if="validation.no_tlp">
            {{ validation.no_tlp[0] }}
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukkan Email"
            v-model="student.email"
          />
          <div class="alert alert-danger" v-if="validation.email">
            {{ validation.email[0] }}
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
    const student = reactive({
      nama_mahasiswa: "",
      alamat: "",
      no_tlp: "",
      email: "",
    });
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`http://127.0.0.1:8000/api/students/${route.params.id}`)
        .then((Response) => {
          console.log(Response.data.data.nama);
          student.nama_mahasiswa = Response.data.data.nama_mahasiswa;
          student.alamat = Response.data.data.alamat;
          student.no_tlp = Response.data.data.no_tlp;
          student.email = Response.data.data.email;
        })
        .catch((error) => {
          console.log(error.Response.data);
        });
    });
    function update() {
      let nama_mahasiswa = student.nama_mahasiswa;
      let alamat = student.alamat;
      let no_tlp = student.no_tlp;
      let email = student.email;
      axios
        .put(`http://127.0.0.1:8000/api/students/${route.params.id}`, {
          nama_mahasiswa: nama_mahasiswa,
          alamat: alamat,
          no_tlp: no_tlp,
          email: email,
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
      student,
      validation,
      router,
      update,
      route,
    };
  },
};
</script>