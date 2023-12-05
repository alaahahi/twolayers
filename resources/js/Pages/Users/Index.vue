<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Modal from '@/Components/Modal.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';
import { TailwindPagination } from 'laravel-vue-pagination';

const laravelData = ref({});
const userLocation = ref({});
const getResults = async (page = 1) => {
    const response = await fetch(`${props.url}/getIndex?page=${page}`);
    laravelData.value = await response.json();
}
const getUserLocation = async (id) => {
    const response = await fetch(`${props.url}/userLocation/${id}`);
    userLocation.value = await response.json();

}

getResults();


const props = defineProps({
    url:String
});

const form = useForm();

function destroy(id) {
    if (confirm("Are you sure you want to Delete")) {
        form.delete(route('users.destroy', id));
        getResults();
    }
}
function ban(id) {
    if (confirm("Are you sure you want to Ban")) {
        form.get(route('ban', id));
        getResults();
    }
}
function unban(id) {
   
        form.get(route('unban', id));
        getResults();
}
let showModal =  ref(false);
const  map = (id) => {
    if(getUserLocation(id)){
        showModal.value = true;

    }
}
</script>

<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Manage users
            </h2>
        </template>
        <modal :show="showModal"  :data="userLocation.data"  @close="showModal = false">
      <template #header>
        <h3 class="text-center">User location Massaging</h3>
      </template>
    </modal>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">

                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-rose-500 rounded-md focus:outline-none"
                                :href="route('users.create')">
                                Create User
                            </Link>
                        </div>
       
                        <table  class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                            <thead class="text-white">
                                <tr class="bg-rose-500 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                                <tr class="bg-rose-500  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                                <tr class="bg-rose-500  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                                <tr class="bg-rose-500  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                                <tr class="bg-rose-500  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                                <tr class="bg-rose-500 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                                <tr class="bg-rose-500  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                                <tr class="bg-rose-500  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                                <tr class="bg-rose-500  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                                <tr class="bg-rose-500  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">User name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Parent</th>
                                    <th className="px-4 py-2">Action</th>         
                                </tr>
                            </thead>
                            <tbody class="flex-1 sm:flex-none">
                              
                                <tr v-for="user,index in laravelData.data" :key="user.id"  class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 hover:bg-gray-100">
                                    <td className="border px-4 py-2">{{ index+1 }}</td>
                                    <td className="border px-4 py-2">{{ user.name }}</td>
                                    <td className="border px-4 py-2">{{ user.email }}<span v-if="user.device" class="text-sm text-green-500 font-bold  py-2 px-2 hover:text-red-500">{{user.device}}</span></td>
                                    <td className="border px-4 py-2">{{ user.user_type ? user.user_type['name'] :"" }}</td>
                                    <td className="border px-4 py-2" style="min-height: 42px;">{{ user.get_parent_user ? user.get_parent_user['name']:""}}</td>
                                    <td className="border px-4 py-2"  style="min-height: 42px;">
                                        <Link
                                            tabIndex="1"
                                            className="px-2 py-1 text-sm text-white bg-slate-500 rounded"
                                            :href="route('users.edit', user.id)"
                                            v-if="user.email!='admin@admin.com'"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            @click="destroy(user.id)"
                                            tabIndex="-1"
                                            type="button"
                                            className="mx-1 px-2 py-1 text-sm text-white bg-rose-500 rounded"
                                            v-if="user.email!='admin@admin.com'"
                                        >
                                            Delete
                                        </button>
                                        
                                        <button 
                                            @click="ban(user.id)"
                                            tabIndex="-1"
                                            type="button"
                                            className="mx-1 px-2 py-1 text-sm text-white bg-orange-500 rounded"
                                            v-if="!user.is_band && user.email!='admin@admin.com'"
                                        >
                                            Ban
                                        </button>
                                        <button 
                                            @click="unban(user.id)"
                                            tabIndex="-1"
                                            type="button"
                                            className="mx-1 px-2 py-1 text-sm text-white bg-orange-500 rounded"
                                            v-if="user.is_band && user.email!='admin@admin.com'"
                                        >
                                            Un Ban
                                        </button>
                                        <!-- <button 
                                            @click="map(user.id)"
                                            tabIndex="-1"
                                            type="button"
                                            className="mx-1 px-2 py-1 text-sm text-white bg-blue-500 rounded"
                                            v-if="user.email!='admin@admin.com'"
                                        >
                                            Map
                                        </button> -->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="mt-3">
                            <ul>
                            <li v-for="user in laravelData.data" :key="user.id">{{ user.title }}</li>
                            </ul>

                            <TailwindPagination
                                :data="laravelData"
                                @pagination-change-page="getResults"
                            />
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
